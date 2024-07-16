"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[3578],{2789:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,p]of t)a[e]=p;return a}},1855:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>i});var p=a(7829);const l=(0,p.Fv)('<h2 id="tcp的重传机制" tabindex="-1"><a class="header-anchor" href="#tcp的重传机制"><span>TCP的重传机制</span></a></h2><h3 id="_1-超时重传" tabindex="-1"><a class="header-anchor" href="#_1-超时重传"><span>1.超时重传</span></a></h3><p>在发送数据时，设定一个定时器，当超过指定的时间后，没有收到对方的 <code>ACK</code> 确认应答报文，就会重发该数据</p><blockquote><p>超时时间应该设置为多少呢？</p><p><code>RTT</code>（Round-Trip Time 往返时延）<strong>数据发送时刻到接收到确认的时刻的差值</strong></p><p>RTO超时重传时间：</p><ul><li>RTO较长，重发很慢，没有效率</li><li>RTO较短，导致没有丢包就会重传，导致更多的超时</li></ul></blockquote><p>ROT应该较大于RTT</p><p>**每当遇到一次超时重传的时候，都会将下一次超时时间间隔设为先前值的两倍。两次超时，就说明网络环境差，不宜频繁反复发送。**超时重传的周期可能时间过长</p><h3 id="_2-快速重传" tabindex="-1"><a class="header-anchor" href="#_2-快速重传"><span>2.快速重传</span></a></h3><p>针对收到三次相同的报文，就会在定时器过期之前，重传丢失的报文</p><p>但是他有一个问题<strong>重传的时候，是重传一个，还是重传所有的问题。</strong></p><h3 id="_3-sack方法" tabindex="-1"><a class="header-anchor" href="#_3-sack方法"><span>3.SACK方法</span></a></h3><p><code>SACK</code>（ Selective Acknowledgment），选择性确认</p><p><strong>可以将已收到的数据的信息发送给「发送方」</strong>，这样发送方就可以知道哪些数据收到了，哪些数据没收到，知道了这些信息，就可以<strong>只重传丢失的数据</strong>。</p><p>需要两方都支持SACK</p><h3 id="_4-duplicate-sack" tabindex="-1"><a class="header-anchor" href="#_4-duplicate-sack"><span>4.Duplicate SACK</span></a></h3><p><strong>使用了 SACK 来告诉「发送方」有哪些数据被重复接收了。</strong></p><ol><li>可以让「发送方」知道，是发出去的包丢了，还是接收方回应的 ACK 包丢了;</li><li>可以知道是不是「发送方」的数据包被网络延迟了;</li><li>可以知道网络中是不是把「发送方」的数据包给复制了;</li></ol>',16),r={},n=(0,a(2789).A)(r,[["render",function(e,t){return(0,p.uX)(),(0,p.CE)("div",null,[(0,p.Q3)(" more "),l])}]]),i=JSON.parse('{"path":"/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E9%87%8D%E4%BC%A0%E6%9C%BA%E5%88%B6.html","title":"TCP的重传机制","lang":"zh-CN","frontmatter":{"title":"TCP的重传机制","date":"2023-11-27T00:00:00.000Z","tags":["计算机基础","计算机网络","TCP"],"categories":["计算机网络"],"head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E9%87%8D%E4%BC%A0%E6%9C%BA%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"博客主页"}],["meta",{"property":"og:title","content":"TCP的重传机制"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-16T10:13:48.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"计算机基础"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:tag","content":"TCP"}],["meta",{"property":"article:published_time","content":"2023-11-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-16T10:13:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP的重传机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-16T10:13:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[{"level":2,"title":"TCP的重传机制","slug":"tcp的重传机制","link":"#tcp的重传机制","children":[{"level":3,"title":"1.超时重传","slug":"_1-超时重传","link":"#_1-超时重传","children":[]},{"level":3,"title":"2.快速重传","slug":"_2-快速重传","link":"#_2-快速重传","children":[]},{"level":3,"title":"3.SACK方法","slug":"_3-sack方法","link":"#_3-sack方法","children":[]},{"level":3,"title":"4.Duplicate SACK","slug":"_4-duplicate-sack","link":"#_4-duplicate-sack","children":[]}]}],"git":{"createdTime":1721124828000,"updatedTime":1721124828000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"demo/计算机网络/TCP/TCP的重传机制.md","localizedDate":"2023年11月27日","excerpt":""}')}}]);