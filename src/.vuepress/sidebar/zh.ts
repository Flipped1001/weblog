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
});
