import { defineClientConfig, usePageData, useSiteData } from "vuepress/client";
import {DenaroMoefyCanvas} from "./components/DenaroMoefyCanvas.js"


export default defineClientConfig({
  rootComponents: [DenaroMoefyCanvas],
});