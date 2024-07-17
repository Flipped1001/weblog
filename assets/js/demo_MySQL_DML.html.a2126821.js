"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[2880],{2789:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},9311:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>k,data:()=>p});var n=a(7829);const l=[(0,n.Fv)('<h2 id="dml" tabindex="-1"><a class="header-anchor" href="#dml"><span>DML</span></a></h2><p>DML数据库操作语言，用来对数据库表中的数据进行增删改查</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#给指定字段添加数据</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名(字段名1，字段名2,...)</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">VALUE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(值1，值2)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#例子</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `flipped-user1`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`NAME`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`AGE`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">VALUE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;ALice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#给全部的字段添加数据</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(值1，值2,..)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#例子</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `flipped-user1`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#批量添加数据</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名(字段名1,字段名2, .. )</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(值1,值2,.),(值1,值2, .. ),(值1,值2, ... );</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名VALUES(值1,值2,.),(值1,值2, .. ),(值1,值2, ... );</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#例子</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `flipped-user1`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`NAME`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`AGE`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), (</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), (</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Charlie&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#修改数据</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 字段名1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">值1,字段名2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">值2,...</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">[WHERE 条件]</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#例子</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `flipped-user1`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;倪浩&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;flipped&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#删除数据（</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 是一个特殊的值，不能使用普通的等号（</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">）进行比较，应该使用 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">IS</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 进行比较）</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">DELETE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">[WHERE 条件]</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">DELETE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `flipped-user1`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `name`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> IS</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>',4)],h={},k=(0,a(2789).A)(h,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,l)}]]),p=JSON.parse('{"path":"/demo/MySQL/DML.html","title":"SQL的DML","lang":"zh-CN","frontmatter":{"title":"SQL的DML","date":"2022-05-29T00:00:00.000Z","tags":["sql"],"categories":["mysql"],"description":"DML DML数据库操作语言，用来对数据库表中的数据进行增删改查","head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/demo/MySQL/DML.html"}],["meta",{"property":"og:site_name","content":"博客主页"}],["meta",{"property":"og:title","content":"SQL的DML"}],["meta",{"property":"og:description","content":"DML DML数据库操作语言，用来对数据库表中的数据进行增删改查"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-17T08:54:19.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"sql"}],["meta",{"property":"article:published_time","content":"2022-05-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-17T08:54:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL的DML\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-17T08:54:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[{"level":2,"title":"DML","slug":"dml","link":"#dml","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1721206459000,"updatedTime":1721206459000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"demo/MySQL/DML.md","localizedDate":"2022年5月29日","excerpt":"<h2>DML</h2>\\n<p>DML数据库操作语言，用来对数据库表中的数据进行增删改查</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">#给指定字段添加数据</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">INSERT INTO</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 表名(字段名1，字段名2,...)</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">VALUE</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(值1，值2)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">#例子</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">INSERT INTO</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> `flipped-user1`</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">`NAME`</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">，</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">`AGE`</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">VALUE</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\'ALice\'</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">30</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">#给全部的字段添加数据</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">INSERT INTO</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 表名 </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">VALUES</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(值1，值2,..)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">#例子</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">INSERT INTO</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> `flipped-user1`</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">VALUES</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">NULL</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\'Alice\'</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">30</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">#批量添加数据</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">INSERT INTO</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 表名(字段名1,字段名2, .. )</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">VALUES</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(值1,值2,.),(值1,值2, .. ),(值1,值2, ... );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">INSERT INTO</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 表名VALUES(值1,值2,.),(值1,值2, .. ),(值1,值2, ... );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">#例子</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">INSERT INTO</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> `flipped-user1`</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">`NAME`</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">`AGE`</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">VALUES</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\'Alice\'</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">2</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">), (</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\'Bob\'</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">3</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">), (</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\'Charlie\'</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">4</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">#修改数据</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">UPDATE</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 表名 </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">SET</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 字段名1</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">值1,字段名2</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">值2,...</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">[WHERE 条件]</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">#例子</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">UPDATE</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> `flipped-user1`</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">SET</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> name</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \'倪浩\'</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">  WHERE</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> name</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\'flipped\'</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">#删除数据（</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">NULL</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 是一个特殊的值，不能使用普通的等号（</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">）进行比较，应该使用 </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">IS</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> NULL</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 进行比较）</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">DELETE</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> FROM</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> 表名 </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">[WHERE 条件]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">DELETE</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> FROM</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> `flipped-user1`</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> WHERE</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> `name`</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> IS</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> NULL</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);