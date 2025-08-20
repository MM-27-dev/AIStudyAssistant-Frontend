import pdfToText from "react-pdftotext";
import mammoth from "mammoth";

export async function extractTextFromFile(file) {
  const fileType = file.name.split(".").pop().toLowerCase();

  try {
    if (fileType === "pdf") {
      return await pdfToText(file);
    }

    if (fileType === "docx") {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      return result.value || "";
    }

    if (fileType === "txt") {
      return await file.text();
    }

    throw new Error(`Unsupported file type: ${fileType}`);
  } catch (err) {
    console.error("Error extracting file text:", err);
    return "";
  }
}
