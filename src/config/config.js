import localConfig from "./local.json";
import productionConfig from "./production.json";
import developmentConfig from "./development.json";

let config;

console.log("Current environment:", import.meta.env.VITE_APP_MODE);

switch (import.meta.env.VITE_APP_MODE) {
  case "development":
    config = developmentConfig;
    break;
  case "production":
    config = productionConfig;
    break;
  default:
    config = localConfig;
}

export default config;
