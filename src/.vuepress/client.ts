import { defineClientConfig } from 'vuepress/client';
import { setupTransparentNavbar } from 'vuepress-theme-hope/presets/transparentNavbar.js';
import { setupSnowFall } from 'vuepress-theme-hope/presets/snowFall.js';
import 'vuepress-theme-hope/presets/bounce-icon.scss';
import 'vuepress-theme-hope/presets/shinning-feature-panel.scss';
import { defineAsyncComponent } from 'vue';

const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));


export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyIcon', MyIcon);
  },
  
  setup: () => {
    setupTransparentNavbar({ type: 'homepage' });
    setupSnowFall();
  },

  rootComponents:[
    BlogBg
  ]
});
