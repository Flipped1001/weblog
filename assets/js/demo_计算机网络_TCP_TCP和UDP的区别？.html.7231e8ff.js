"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[3092],{2789:(e,t)=>{t.A=(e,t)=>{const i=e.__vccOpts||e;for(const[e,a]of t)i[e]=a;return i}},5356:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>o,data:()=>n});var a=i(7829);const p=i.p+"assets/img/2024-05-16-20-27-53.fe1a1320.png",l=(0,a.Fv)('<h3 id="udp和tcp的区别和应用场景" tabindex="-1"><a class="header-anchor" href="#udp和tcp的区别和应用场景"><span>UDP和TCP的区别和应用场景：</span></a></h3><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="tcp和udp的区别" tabindex="-1"><a class="header-anchor" href="#tcp和udp的区别"><span>TCP和UDP的区别：</span></a></h4><h5 id="连接" tabindex="-1"><a class="header-anchor" href="#连接"><span>连接：</span></a></h5><ul><li>TCP面向连接的传输层协议，需要在传输之前建立连接</li><li>UDP不需要连接，即刻传数据</li></ul><p><em>2. 服务对象</em></p><ul><li>TCP 是一对一的两点服务，即一条连接只有两个端点。</li><li>UDP 支持一对一、一对多、多对多的交互通信</li></ul><p><em>3. 可靠性</em></p><ul><li>TCP 是可靠交付数据的，数据可以无差错、不丢失、不重复、按序到达。</li><li>UDP 是尽最大努力交付，不保证可靠交付数据</li></ul><p><em>4. 拥塞控制、流量控制</em></p><ul><li>TCP 有拥塞控制和流量控制机制，保证数据传输的安全性。</li><li>UDP 则没有，即使网络非常拥堵了，也不会影响 UDP 的发送速率。</li></ul><p><em>5. 首部开销</em></p><ul><li>TCP 首部长度较长，会有一定的开销，首部在没有使用「选项」字段时是 <code>20</code> 个字节，如果使用了「选项」字段则会变长的。</li><li>UDP 首部只有 8 个字节，并且是固定不变的，开销较小。</li></ul><p><em>6. 传输方式</em></p><ul><li>TCP 是流式传输，没有边界，但保证顺序和可靠。</li><li>UDP 是一个包一个包的发送，是有边界的，但可能会丢包和乱序。</li></ul><p><em>7. 分片不同</em></p><ul><li>TCP 的数据大小如果大于 MSS 大小，则会在传输层进行分片，目标主机收到后，也同样在传输层组装 TCP 数据包，如果中途丢失了一个分片，只需要传输丢失的这个分片。</li><li>UDP 的数据大小如果大于 MTU 大小，则会在 IP 层进行分片，目标主机收到后，在 IP 层组装完数据，接着再传给传输层。</li></ul>',17),r={},o=(0,i(2789).A)(r,[["render",function(e,t){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Q3)(" more "),l])}]]),n=JSON.parse('{"path":"/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E5%92%8CUDP%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F.html","title":"TCP和UDP的区别","lang":"zh-CN","frontmatter":{"title":"TCP和UDP的区别","date":"2023-11-25T00:00:00.000Z","tags":["计算机基础","计算机网络","TCP"],"categories":["计算机网络"],"head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E5%92%8CUDP%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F.html"}],["meta",{"property":"og:site_name","content":"博客主页"}],["meta",{"property":"og:title","content":"TCP和UDP的区别"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-16T10:13:48.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"计算机基础"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:tag","content":"TCP"}],["meta",{"property":"article:published_time","content":"2023-11-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-16T10:13:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP和UDP的区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-16T10:13:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[{"level":3,"title":"UDP和TCP的区别和应用场景：","slug":"udp和tcp的区别和应用场景","link":"#udp和tcp的区别和应用场景","children":[]}],"git":{"createdTime":1721124828000,"updatedTime":1721124828000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":1.57,"words":470},"filePathRelative":"demo/计算机网络/TCP/TCP和UDP的区别？.md","localizedDate":"2023年11月25日","excerpt":""}')}}]);