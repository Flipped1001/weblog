"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[7681],{6786:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,r]of t)a[e]=r;return a}},220:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>o});var r=a(2758);const i=[(0,r.Fv)('<h2 id="集群脑裂-数据丢失" tabindex="-1"><a class="header-anchor" href="#集群脑裂-数据丢失"><span>集群脑裂，数据丢失</span></a></h2><h3 id="现象" tabindex="-1"><a class="header-anchor" href="#现象"><span>现象</span></a></h3><p>主节点网络波动，哨兵认为主节点下线，就会重新选出新的主节点，但是在这个过程中客户端和主节点是联通的还在通信，当主节点重新连接时，哨兵就会自动将这个主节点设置为从节点，这个时候就会触发全量复制，原主节点就会把所有数据删除，然后复制新主节点的数据，造成在这个期间客户端和Redis的操作数据丢失</p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h3><p>当主节点发现从节点挂掉大半，小于他的阈值的时候。或者在主从复制的时候延迟过高，主节点会限制写操作。</p>',5)],p={},n=(0,a(6786).A)(p,[["render",function(e,t){return(0,r.uX)(),(0,r.CE)("div",null,i)}]]),o=JSON.parse('{"path":"/demo/Redis/%E8%84%91%E8%A3%82.html","title":"脑裂现象","lang":"zh-CN","frontmatter":{"title":"脑裂现象","date":"2022-03-19T00:00:00.000Z","tags":["redis"],"categories":["redis","脑裂"],"description":"集群脑裂，数据丢失 现象 主节点网络波动，哨兵认为主节点下线，就会重新选出新的主节点，但是在这个过程中客户端和主节点是联通的还在通信，当主节点重新连接时，哨兵就会自动将这个主节点设置为从节点，这个时候就会触发全量复制，原主节点就会把所有数据删除，然后复制新主节点的数据，造成在这个期间客户端和Redis的操作数据丢失 解决方法 当主节点发现从节点挂掉大半...","head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/demo/Redis/%E8%84%91%E8%A3%82.html"}],["meta",{"property":"og:site_name","content":"Flipped"}],["meta",{"property":"og:title","content":"脑裂现象"}],["meta",{"property":"og:description","content":"集群脑裂，数据丢失 现象 主节点网络波动，哨兵认为主节点下线，就会重新选出新的主节点，但是在这个过程中客户端和主节点是联通的还在通信，当主节点重新连接时，哨兵就会自动将这个主节点设置为从节点，这个时候就会触发全量复制，原主节点就会把所有数据删除，然后复制新主节点的数据，造成在这个期间客户端和Redis的操作数据丢失 解决方法 当主节点发现从节点挂掉大半..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-10T10:25:42.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"redis"}],["meta",{"property":"article:published_time","content":"2022-03-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-10T10:25:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"脑裂现象\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-10T10:25:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[{"level":2,"title":"集群脑裂，数据丢失","slug":"集群脑裂-数据丢失","link":"#集群脑裂-数据丢失","children":[{"level":3,"title":"现象","slug":"现象","link":"#现象","children":[]},{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}]}],"git":{"createdTime":1723285542000,"updatedTime":1723285542000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":0.69,"words":206},"filePathRelative":"demo/Redis/脑裂.md","localizedDate":"2022年3月19日","excerpt":"<h2>集群脑裂，数据丢失</h2>\\n<h3>现象</h3>\\n<p>主节点网络波动，哨兵认为主节点下线，就会重新选出新的主节点，但是在这个过程中客户端和主节点是联通的还在通信，当主节点重新连接时，哨兵就会自动将这个主节点设置为从节点，这个时候就会触发全量复制，原主节点就会把所有数据删除，然后复制新主节点的数据，造成在这个期间客户端和Redis的操作数据丢失</p>\\n<h3>解决方法</h3>\\n<p>当主节点发现从节点挂掉大半，小于他的阈值的时候。或者在主从复制的时候延迟过高，主节点会限制写操作。</p>\\n","autoDesc":true}')}}]);