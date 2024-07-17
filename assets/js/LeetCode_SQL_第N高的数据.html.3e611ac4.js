"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[8411],{2789:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},8312:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>h,data:()=>t});var n=a(7829);const l=[(0,n.Fv)('<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- LeetCode </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- 176.第二高的薪水</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> MAX</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(salary) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> SecondHighestSalary</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Employee</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> salary </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> MAX</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(salary) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Employee</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    )</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> -- 子查询找到最大的 `salary`,外层查询找到出最大值的剩余数中的最大值</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> SELECT</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT DISTINCT</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            Salary</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        FROM</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            Employee</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        ORDER BY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Salary </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">DESC</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> OFFSET </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> SecondHighestSalary</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- 由于需要输出null，使用 LIMIT 1 OFFSET 1 时，如果表中的行数少于2行，即只有1行或者为空，那么查询将不会返回任何结果，包括 null，所以将查询设为一个子查询，这样外层查询在无数据查询的情况下会返回一个null</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    IFNULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT DISTINCT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Salary</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">       FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Employee</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">       ORDER BY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Salary </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">DESC</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> OFFSET </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> SecondHighestSalary</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- 使用IFNULL，将空值的情况返回一个NULL值</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- 177.第N高的薪水</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FUNCTION</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getNthHighestSalary</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(N </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">RETURNS</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> INT</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">BEGIN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">DECLARE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> M </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> M</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">N</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  RETURN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> IFNULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      (</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      SELECT DISTINCT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> salary </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Employee </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      ORDER BY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> salary </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">DESC</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> OFFSET M</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ),</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> getNthHighestSalary</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  );</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">END</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- 在 LIMIT 子句中使用 OFFSET 时，不能直接将参数N递给 OFFSET。参数必须是一个常量或一个变量，不能是函数参数。</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- DECLARE M INT 声明了一个变量</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">-- SET M = N-1 赋值</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-limit-m-1" tabindex="-1"><a class="header-anchor" href="#_1-limit-m-1"><span>1. <code>LIMIT M, 1</code></span></a></h3><ul><li>这种语法用于从查询结果的第 <code>M</code> 行开始，返回接下来的1行数据。</li><li>这里的 <code>M</code> 是一个整数，表示从结果集的哪一条记录开始返回数据。</li><li>这种语法通常用于分页或获取某一个特定位置的记录。</li></ul><h3 id="_2-limit-offset-count" tabindex="-1"><a class="header-anchor" href="#_2-limit-offset-count"><span>2. <code>LIMIT offset, count</code></span></a></h3><ul><li>这种语法用于跳过查询结果的前 <code>offset</code> 条记录，然后返回接下来的 <code>count</code> 条记录。</li><li><code>offset</code> 是一个整数，表示要跳过的记录数。</li><li><code>count</code> 也是一个整数，表示在跳过 <code>offset</code> 条记录后，要返回的记录数。</li></ul>',5)],e={},h=(0,a(2789).A)(e,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,l)}]]),t=JSON.parse('{"path":"/LeetCode/SQL/%E7%AC%ACN%E9%AB%98%E7%9A%84%E6%95%B0%E6%8D%AE.html","title":"第N高的数据","lang":"zh-CN","frontmatter":{"title":"第N高的数据","date":"2024-04-12T00:00:00.000Z","tags":["leecode"],"categories":["leecode","sql"],"description":"1. LIMIT M, 1 这种语法用于从查询结果的第 M 行开始，返回接下来的1行数据。 这里的 M 是一个整数，表示从结果集的哪一条记录开始返回数据。 这种语法通常用于分页或获取某一个特定位置的记录。 2. LIMIT offset, count 这种语法用于跳过查询结果的前 offset 条记录，然后返回接下来的 count 条记录。 offse...","head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/LeetCode/SQL/%E7%AC%ACN%E9%AB%98%E7%9A%84%E6%95%B0%E6%8D%AE.html"}],["meta",{"property":"og:site_name","content":"博客主页"}],["meta",{"property":"og:title","content":"第N高的数据"}],["meta",{"property":"og:description","content":"1. LIMIT M, 1 这种语法用于从查询结果的第 M 行开始，返回接下来的1行数据。 这里的 M 是一个整数，表示从结果集的哪一条记录开始返回数据。 这种语法通常用于分页或获取某一个特定位置的记录。 2. LIMIT offset, count 这种语法用于跳过查询结果的前 offset 条记录，然后返回接下来的 count 条记录。 offse..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-17T08:54:19.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"leecode"}],["meta",{"property":"article:published_time","content":"2024-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-17T08:54:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第N高的数据\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-17T08:54:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[{"level":3,"title":"1. LIMIT M, 1","slug":"_1-limit-m-1","link":"#_1-limit-m-1","children":[]},{"level":3,"title":"2. LIMIT offset, count","slug":"_2-limit-offset-count","link":"#_2-limit-offset-count","children":[]}],"git":{"createdTime":1721206459000,"updatedTime":1721206459000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":1.51,"words":453},"filePathRelative":"LeetCode/SQL/第N高的数据.md","localizedDate":"2024年4月12日","excerpt":"<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- LeetCode </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- 176.第二高的薪水</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">SELECT</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\"> MAX</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(salary) </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">AS</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> SecondHighestSalary</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">FROM</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Employee</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">WHERE</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> salary </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">  SELECT</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\"> MAX</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(salary) </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">FROM</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Employee</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    )</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\"> -- 子查询找到最大的 `salary`,外层查询找到出最大值的剩余数中的最大值</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> SELECT</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    (</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">SELECT DISTINCT</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">            Salary</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">        FROM</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">            Employee</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">        ORDER BY</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Salary </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">DESC</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">        LIMIT</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> OFFSET </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">AS</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> SecondHighestSalary</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- 由于需要输出null，使用 LIMIT 1 OFFSET 1 时，如果表中的行数少于2行，即只有1行或者为空，那么查询将不会返回任何结果，包括 null，所以将查询设为一个子查询，这样外层查询在无数据查询的情况下会返回一个null</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">SELECT</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    IFNULL</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">      (</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">SELECT DISTINCT</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Salary</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">       FROM</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Employee</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">       ORDER BY</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Salary </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">DESC</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">        LIMIT</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> OFFSET </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">),</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    NULL</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">AS</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> SecondHighestSalary</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- 使用IFNULL，将空值的情况返回一个NULL值</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- 177.第N高的薪水</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">CREATE</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> FUNCTION</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> getNthHighestSalary</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(N </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">INT</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">RETURNS</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> INT</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">BEGIN</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">DECLARE</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> M </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">INT</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">SET</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> M</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">N</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">-</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">  RETURN</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    SELECT</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> IFNULL</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">      (</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">      SELECT DISTINCT</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> salary </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">      FROM</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Employee </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">      ORDER BY</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> salary </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">DESC</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">      LIMIT</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> OFFSET M</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    ),</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">null</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">AS</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> getNthHighestSalary</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">END</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- 在 LIMIT 子句中使用 OFFSET 时，不能直接将参数N递给 OFFSET。参数必须是一个常量或一个变量，不能是函数参数。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- DECLARE M INT 声明了一个变量</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">-- SET M = N-1 赋值</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);