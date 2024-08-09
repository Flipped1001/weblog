import { navbar } from "vuepress-theme-hope";



export const zhNavbar = navbar([
  "/",

  {
    text: "cahier",
    icon: "list-check",
    prefix: "/",
    children:[
      {
      "text": "基础知识",
      "icon": "folder",
      "children": [
        {
          "text": "计算机网络",
          "icon": "tag",
          "link": "/demo/计算机网络/"
        },
        {
          "text": "操作系统",
          "icon": "tag",
          "link": "/demo/计算机操作系统/"
        },
        {
          "text": "MySQL",
          "icon": "tag",
          "link": "/demo/MySQL/"
        }
      ]
      },
    ]

  },
  {
    text: "LeetCode",
    icon: "code",
    link: "/LeetCode/",
  },

  {
    text: "applied",
    icon: "applied",
    link: "/Work/",
  },


  {
    text: "tools",
    icon: "tutorial",
    prefix: "/",
    children:[
      {
      "text": "工具",
      "icon": "toolbox",
      "children": [
        {
          "text": "go",
          "icon": "golang",
          "link": "/tool/go基础/"
        },
        {
          "text": "python",
          "icon": "python",
          "link": "/tool/python基础/"
        },
      ]
      },
    ]

  },

  {
    text: "blogroll",
    icon: "blog",
    link: "/friend.html",
  },

  
]);
