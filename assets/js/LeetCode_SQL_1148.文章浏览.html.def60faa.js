"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[143],{2789:(i,s)=>{s.A=(i,s)=>{const e=i.__vccOpts||i;for(const[i,a]of s)e[i]=a;return e}},324:(i,s,e)=>{e.r(s),e.d(s,{comp:()=>l,data:()=>h});var a=e(7829);const t=[(0,a.Fv)('<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- LeetCode </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- 1148.文章浏览I</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> author_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Views </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> viewer_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> author_id  </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  group by</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> author_id </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  order by</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1)],n={},l=(0,e(2789).A)(n,[["render",function(i,s){return(0,a.uX)(),(0,a.CE)("div",null,t)}]]),h=JSON.parse('{"path":"/LeetCode/SQL/1148.%E6%96%87%E7%AB%A0%E6%B5%8F%E8%A7%88.html","title":"游戏玩法分析","lang":"zh-CN","frontmatter":{"title":"游戏玩法分析","date":"2024-04-15T00:00:00.000Z","tags":["leecode"],"categories":["leecode","sql"],"head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/LeetCode/SQL/1148.%E6%96%87%E7%AB%A0%E6%B5%8F%E8%A7%88.html"}],["meta",{"property":"og:site_name","content":"博客主页"}],["meta",{"property":"og:title","content":"游戏玩法分析"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-17T13:48:02.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"leecode"}],["meta",{"property":"article:published_time","content":"2024-04-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-17T13:48:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"游戏玩法分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-17T13:48:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[],"git":{"createdTime":1721224082000,"updatedTime":1721224082000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":0.13,"words":39},"filePathRelative":"LeetCode/SQL/1148.文章浏览.md","localizedDate":"2024年4月15日","excerpt":"<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- LeetCode </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- 1148.文章浏览I</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">select</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> author_id </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">as</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> id </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">  from</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Views </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">  where</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> viewer_id </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> author_id  </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">  group by</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> author_id </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">  order by</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> id</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}')}}]);