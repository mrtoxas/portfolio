import { themeInitialize } from "./theme"
import { pageLoader } from "./loader"

document.addEventListener("DOMContentLoaded", () => {
  themeInitialize();
  pageLoader();
});