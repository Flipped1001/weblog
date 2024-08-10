import { defineClientConfig } from 'vuepress/client';
import { setupTransparentNavbar } from 'vuepress-theme-hope/presets/transparentNavbar.js';
import { setupSnowFall } from 'vuepress-theme-hope/presets/snowFall.js';
import 'vuepress-theme-hope/presets/bounce-icon.scss';
import 'vuepress-theme-hope/presets/shinning-feature-panel.scss';
import { defineAsyncComponent } from 'vue';
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));



export default defineClientConfig({
  setup: () => {
    setupTransparentNavbar({ type: 'homepage' });
    setupSnowFall();
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  },

  rootComponents:[
    BlogBg
  ]

  
});
