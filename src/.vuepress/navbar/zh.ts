import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",


  {
    text: "指南",
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
          "link": "/demo/"
        },
        {
          "text": "操作系统",
          "icon": "tag",
          "link": "/posts/"
        }
      ]
      },
    ]

  },

  {
    text: "学习笔记",
    icon: "tag",
    link: "/demo/",
  },

  {
    text: "LeetCode",
    icon: "tag",
    link: "/LeetCode/",
  },

]);
