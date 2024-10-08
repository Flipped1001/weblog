import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { popperPlugin } from "./public/vuepress-plugin-popper/index.js";
import { hopeTheme } from "vuepress-theme-hope";



const __dirname = getDirname(import.meta.url);



export default defineUserConfig({
  
  base: "/",
dest:'dist',
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "Flipped",
      description: "Flipped 的博客演示",
    },
  },

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
    "@MyCoverLink": path.resolve(__dirname, "./components/MyCoverLink.vue"),
  },
  plugins: [
    searchProPlugin({
      // 配置选项
      autoSuggestions: false
    }),

    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 8,
      },
    }),
  ],

   
  head:[

    
     // 导入相应链接
     ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
     [
       "link",
       { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
     ],
     [
       "link",
       {
         href: "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap",
         rel: "stylesheet",
       },
     ],
     [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Sevillana&display=swap",
        rel: "stylesheet",
      },
    ],
   ],


   // 在此处引入Vue组件
   
   
});


