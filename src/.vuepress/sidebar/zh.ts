import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  

  "/demo/": [
    "/",
    {
      text: "学习笔记",
      icon: "laptop-code",
      link: "/demo/",
      children: "structure",
    },
  ],

  "/LeetCode/": [
    "/",
    {
      text: "每日力扣题",
      icon: "laptop-code",
      link: "/LeetCode/",
      children: "structure",
    },
  ],

  "/Work/": [
    "/",
    {
      text: "实用问题",
      icon: "laptop-code",
      link: "/demo/",
      children: "structure",
    },
  ],

  "/tool/": [
    "/",
    {
      text: "工具",
      icon: "laptop-code",
      link: "/tool/",
      children: "structure",
    },
  ],

  "/Friend/": [
    "/",
    {
      text: "友情链接",
      icon: "laptop-code",
      link: "/Friend/",
      children: "structure",
    },
  ],

  "/Redis/": [
    "/",
    {
      text: "友情链接",
      icon: "laptop-code",
      link: "/Redis/",
      children: "structure",
    },
  ],


});
