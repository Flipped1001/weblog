import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
import { searchProPlugin } from "vuepress-plugin-search-pro";



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
      title: "博客主页",
      description: "vuepress-theme-hope 的博客演示",
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
  },
  plugins: [
    searchProPlugin({
      // 配置选项
      autoSuggestions:true,
      customFields: [
        {
          getter: (page) => page.frontmatter.title,
          formatter: {
            "/en/": "Title: $content",
            "/": "标题：$content",
          },
        },
      ],
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


