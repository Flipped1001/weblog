import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",


  {
    text: "cahier",
    icon: "bars",
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
    icon: "tag",
    link: "/LeetCode/",
  },

  {
    text: "applied",
    icon: "tag",
    link: "/Work/",
  },


  {
    text: "tools",
    icon: "bars",
    prefix: "/",
    children:[
      {
      "text": "工具",
      "icon": "folder",
      "children": [
        {
          "text": "go",
          "icon": "tag",
          "link": "/tool/go基础/"
        },
        {
          "text": "python",
          "icon": "tag",
          "link": "/tool/python基础/"
        },
      ]
      },
    ]

  },

]);
