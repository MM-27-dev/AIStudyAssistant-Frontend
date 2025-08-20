// import pdfjsLib from "pdfjs-dist/legacy/build/pdf.js";
import * as pdfjsLib from "pdfjs-dist";
import { createCanvas } from "canvas";
import Tesseract from "tesseract.js";

//Required: tell pdfjs where to find the worker

export async function pdfToText(file) {
  try {
    const fileData = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: fileData });
    const pdf = await loadingTask.promise;
    let textContent = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map((item) => item.str).filter(Boolean);

      if (strings.length > 0) {
        textContent += strings.join(" ") + "\n\n";
      } else {
        // If no selectable text, perform OCR on rendered image
        const viewport = page.getViewport({ scale: 2 });
        const canvas = createCanvas(viewport.width, viewport.height);
        const context = canvas.getContext("2d");

        await page.render({ canvasContext: context, viewport }).promise;
        const imageBuffer = canvas.toBuffer("image/png");
        const ocrResult = await Tesseract.recognize(imageBuffer, "eng");
        textContent += ocrResult.data.text + "\n\n";
      }
    }

    return textContent;
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
    return "";
  }
}
