import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://flipped1001.cn",

  author: {
    name: "Flipped",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/images/logo2.jpg",

  repo: "https://github.com/Flipped1001",

  docsDir: "src",

  fullscreen: true,


  
  blog: {
    medias: {
      Gitee: "https://gitee.com/flipped1001",
      GitHub: "https://github.com/Flipped1001",
      Gmail: "mailto:info@example.com",
      QQ: "/assets/images/QQ.jpeg",  
      Wechat: "/assets/images/WX.jpg",
      
    },
  },


  navbarLayout:{
    start:["Brand"],
    center:["Links"],
    end:["Language","Repo","Outlook","Search"],
  },

  locales: {

    
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/en/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "豫ICP备2024072453号",

      displayFooter: true,
      

      blog: {
        avatar: "/assets/images/head.jpg",
        name:"Flipped",
        description: "在这片土地上，你不干活有的是帕鲁干活",
        intro: "/intro.html",
        timeline:"快写博客",
        articlePerPage:5,
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      // "/intro": ["1234"],
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {

    photoSwipe:{selector:".theme-hope-content img"},

    searchPro:true,//搜索栏

    // watermark:true, //水印
    blog: true,

  
    components: {
      components: ["Badge", "VPCard"],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      
    },
  },
},{ custom: true });
