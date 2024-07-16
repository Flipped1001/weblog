"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[8770],{2789:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,r]of t)a[e]=r;return a}},4175:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>s,data:()=>l});var r=a(7829);const i=a.p+"assets/img/2024-05-16-20-41-07.bc105d26.png",n=a.p+"assets/img/2024-05-16-20-41-16.ab2c6a6c.png",p=a.p+"assets/img/2024-05-16-20-41-25.18066c7e.png",c=(0,r.Fv)('<h2 id="如何基于udp实现可靠传输" tabindex="-1"><a class="header-anchor" href="#如何基于udp实现可靠传输"><span><strong>如何基于UDP实现可靠传输？</strong></span></a></h2><h3 id="quic是如何实现可靠传输的" tabindex="-1"><a class="header-anchor" href="#quic是如何实现可靠传输的"><span>QUIC是如何实现可靠传输的？</span></a></h3><p>在应用层下功夫，报文多加几个头部字段</p><img src="https://s21.ax1x.com/2024/05/29/pk3U6sI.png" alt="图片" width="300" height="300"><h4 id="packet-header" tabindex="-1"><a class="header-anchor" href="#packet-header"><span>Packet Header</span></a></h4><p>Packet Header 首次建立连接时和日常传输数据时使用的 Header 是不同的</p><p>QUIC 也是需要三次握手来建立连接的，主要目的是为了协商连接 ID。</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>Packet Number</code> 是每个报文独一无二的编号，它是<strong>严格递增</strong>的，也就是说就算 Packet N 丢失了，重传的 Packet N 的 Packet Number 已经不是 N，而是一个比 N 大的值。</p><blockquote><p>这样做的好处，使重传没有歧义（歧义：是接受到上一次的数据包，还是重传之后的数据包），可以支持乱序确认</p></blockquote><h4 id="quic-frame-header" tabindex="-1"><a class="header-anchor" href="#quic-frame-header"><span>QUIC Frame Header</span></a></h4><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>stream类型的Fream:</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>stream ID:用于区分不同的HTTP信息 Offset：用于标识数据，保证数据的顺序性和可靠 Length:指明数据的长度</p><p><strong>丢失的数据包和重传的数据包 Stream ID 与 Offset 都一致，说明这两个数据包的内容一致</strong></p><h3 id="quic-是如何解决-tcp-队头阻塞问题的" tabindex="-1"><a class="header-anchor" href="#quic-是如何解决-tcp-队头阻塞问题的"><span>QUIC 是如何解决 TCP 队头阻塞问题的？</span></a></h3><p><strong>TCP 必须按序处理数据，也就是 TCP 层为了保证数据的有序性，只有在处理完有序的数据后，滑动窗口才能往前滑动</strong>，如果其中一个数据丢失，窗口停留直到丢失的数据包被重传接收</p><p><strong>HTTP/2 多个 Stream 请求都是在一条 TCP 连接上传输，这意味着多个 Stream 共用同一个 TCP 滑动窗口，那么当发生数据丢失，滑动窗口是无法往前移动的，此时就会阻塞住所有的 HTTP 请求，这属于 TCP 层队头阻塞</strong>。</p><p>QUIC的解决办法：</p><p><strong>QUIC 给每一个 Stream 都分配了一个独立的滑动窗口，这样使得一个连接上的多个 Stream 之间没有依赖关系，都是相互独立的，各自控制的滑动窗口</strong>。</p><h3 id="quic-是如何做流量控制的" tabindex="-1"><a class="header-anchor" href="#quic-是如何做流量控制的"><span>QUIC 是如何做流量控制的？</span></a></h3><p>QUIC 的滑动窗口滑动的条件跟 TCP 有一点差别，但是同一个 Stream 的数据也是要保证顺序的，不然无法实现可靠传输，因此某一个 Stream 的数据包丢失了，也会造成某一个Stream的窗口无法滑动。</p><ul><li><strong>Stream 级别的流量控制</strong>：Stream 可以认为就是一条 HTTP 请求，每个 Stream 都有独立的滑动窗口，所以每个 Stream 都可以做流量控制，防止单个 Stream 消耗连接（Connection）的全部接收缓冲。 <ol><li>接受窗口的左侧边界取决于最大偏移数</li><li>当已读取的数据大于最大接受窗口的一半时，将窗口向右移动当前已读取的数据字节数</li><li>控制数据发送的唯一限制就是最大绝对字节偏移量，该值是接收方基于当前已经提交的偏移量（连续已确认并向上层应用提交的数据包offset）和发送方协商得出</li></ol></li><li><strong>Connection 流量控制</strong>：限制连接中所有 Stream 相加起来的总字节数，防止发送方超过连接的缓冲容量 <ol><li>而对于 Connection 级别的流量窗口，其接收窗口大小就是各个 Stream 接收窗口大小之和</li></ol></li></ul><h3 id="quic-对拥塞控制改进" tabindex="-1"><a class="header-anchor" href="#quic-对拥塞控制改进"><span>QUIC 对拥塞控制改进</span></a></h3><p>将TCP的拥塞控制算法搬过来，QUIC作为一个基于UDP的传输层协议，提供了在应用层实现拥塞控制的能力，<strong>QUIC 可以随浏览器更新，QUIC 的拥塞控制算法就可以有较快的迭代速度</strong>。<strong>可以针对不同的应用设置不同的拥塞控制算法</strong></p><h3 id="quic-更快的连接建立" tabindex="-1"><a class="header-anchor" href="#quic-更快的连接建立"><span>QUIC 更快的连接建立</span></a></h3><p><strong>QUIC 内部包含了 TLS，它在自己的帧会携带 TLS 里的“记录”，再加上 QUIC 使用的是 TLS1.3，因此仅需 1 个 RTT 就可以「同时」完成建立连接与密钥协商，甚至在第二次连接的时候，应用数据包可以和 QUIC 握手信息（连接信息 + TLS 信息）一起发送，达到 0-RTT 的效果</strong>。</p><h3 id="quic-是如何迁移连接的" tabindex="-1"><a class="header-anchor" href="#quic-是如何迁移连接的"><span>QUIC 是如何迁移连接的？</span></a></h3><p>通过<strong>连接 ID</strong>来标记通信的两个端点，客户端和服务器可以各自选择一组 ID 来标记自己，因此即使移动设备的网络变化后，导致 IP 地址变化了，只要仍保有上下文信息（比如连接 ID、TLS 密钥等），就可以“无缝”地复用原连接，消除重连的成本，没有丝毫卡顿感，达到了<strong>连接迁移</strong>的功能</p>',30),o={},s=(0,a(2789).A)(o,[["render",function(e,t){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Q3)(" more "),c])}]]),l=JSON.parse('{"path":"/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/%E5%9F%BA%E4%BA%8EUDP%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%AF%E9%9D%A0%E7%9A%84%E8%BF%9E%E6%8E%A5%E5%8D%8F%E8%AE%AE.html","title":"QUIC协议","lang":"zh-CN","frontmatter":{"title":"QUIC协议","date":"2023-12-02T00:00:00.000Z","tags":["计算机基础","计算机网络","TCP"],"categories":["计算机网络"],"head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/%E5%9F%BA%E4%BA%8EUDP%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%AF%E9%9D%A0%E7%9A%84%E8%BF%9E%E6%8E%A5%E5%8D%8F%E8%AE%AE.html"}],["meta",{"property":"og:site_name","content":"博客主页"}],["meta",{"property":"og:title","content":"QUIC协议"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-16T10:13:48.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"计算机基础"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:tag","content":"TCP"}],["meta",{"property":"article:published_time","content":"2023-12-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-16T10:13:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"QUIC协议\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-16T10:13:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[{"level":2,"title":"如何基于UDP实现可靠传输？","slug":"如何基于udp实现可靠传输","link":"#如何基于udp实现可靠传输","children":[{"level":3,"title":"QUIC是如何实现可靠传输的？","slug":"quic是如何实现可靠传输的","link":"#quic是如何实现可靠传输的","children":[]},{"level":3,"title":"QUIC 是如何解决 TCP 队头阻塞问题的？","slug":"quic-是如何解决-tcp-队头阻塞问题的","link":"#quic-是如何解决-tcp-队头阻塞问题的","children":[]},{"level":3,"title":"QUIC 是如何做流量控制的？","slug":"quic-是如何做流量控制的","link":"#quic-是如何做流量控制的","children":[]},{"level":3,"title":"QUIC 对拥塞控制改进","slug":"quic-对拥塞控制改进","link":"#quic-对拥塞控制改进","children":[]},{"level":3,"title":"QUIC 更快的连接建立","slug":"quic-更快的连接建立","link":"#quic-更快的连接建立","children":[]},{"level":3,"title":"QUIC 是如何迁移连接的？","slug":"quic-是如何迁移连接的","link":"#quic-是如何迁移连接的","children":[]}]}],"git":{"createdTime":1721124828000,"updatedTime":1721124828000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":4.03,"words":1210},"filePathRelative":"demo/计算机网络/TCP/基于UDP实现一个可靠的连接协议.md","localizedDate":"2023年12月2日","excerpt":""}')}}]);