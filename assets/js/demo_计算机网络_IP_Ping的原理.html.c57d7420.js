"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[973],{6786:(e,t)=>{t.A=(e,t)=>{const s=e.__vccOpts||e;for(const[e,o]of t)s[e]=o;return s}},329:(e,t,s)=>{s.r(t),s.d(t,{comp:()=>a,data:()=>r});var o=s(2758);const n=s.p+"assets/img/2024-05-18-16-02-12.0eac3655.png",i=(0,o.Fv)('<h2 id="ping的工作原理" tabindex="-1"><a class="header-anchor" href="#ping的工作原理"><span>ping的工作原理</span></a></h2><h4 id="查询报文类型" tabindex="-1"><a class="header-anchor" href="#查询报文类型"><span>查询报文类型</span></a></h4><blockquote><p>回送消息 —— 类型 <code>0</code> 和 <code>8</code></p></blockquote><p><strong>回送消息</strong>用于进行通信的主机或路由器之间，判断所发送的数据包是否已经成功到达对端的一种消息，<code>ping</code> 命令就是利用这个消息实现的。</p><p>可以向对端主机发送<strong>回送请求</strong>的消息（<code>ICMP Echo Request Message</code>，类型 <code>8</code>），也可以接收对端主机发回来的<strong>回送应答</strong>消息（<code>ICMP Echo Reply Message</code>，类型 <code>0</code>）。</p><p>相比原生的 ICMP，这里多了两个字段：</p><ul><li><strong>标识符</strong>：用以区分是哪个应用程序发 ICMP 包，比如用进程 <code>PID</code> 作为标识符；</li><li><strong>序号</strong>：序列号从 <code>0</code> 开始，每发送一次新的回送请求就会加 <code>1</code>， 可以用来确认网络包是否有丢失。</li></ul><p>在<strong>选项数据</strong>中，<code>ping</code> 还会存放发送请求的时间值，来计算往返时间，说明路程的长短</p><p>ping 命令执行的时候，源主机首先会构建一个 <strong>ICMP 回送请求消息</strong>数据包。</p><p>ICMP 数据包内包含多个字段，最重要的是两个：</p><ul><li>第一个是<strong>类型</strong>，对于回送请求消息而言该字段为 <code>8</code>；</li><li>另外一个是<strong>序号</strong>，主要用于区分连续 ping 的时候发出的多个数据包</li></ul><p>目标主机 会构建一个 <strong>ICMP 回送响应消息</strong>数据包，回送响应数据包的<strong>类型</strong>字段为 <code>0</code>，<strong>序号</strong>为接收到的请求数据包中的序号，然后再发送出去给源主机</p><p>在规定的时候间内，源主机如果没有接到 ICMP 的应答包，则说明目标主机不可达；如果接收到了 ICMP 回送响应消息，则说明目标主机可达。</p><p>此时，源主机会检查，用当前时刻减去该数据包最初从源主机上发出的时刻，就是 ICMP 数据包的时间延迟。</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="traceroute" tabindex="-1"><a class="header-anchor" href="#traceroute"><span>traceroute :</span></a></h4><p><em>1. traceroute 作用一</em></p><p>traceroute 的第一个作用就是<strong>故意设置特殊的 TTL，来追踪去往目的地时沿途经过的路由器。</strong></p><p>它的原理就是利用 IP 包的<strong>生存期限</strong> 从 <code>1</code> 开始按照顺序递增的同时发送 <strong>UDP 包</strong>，强制接收 <strong>ICMP 超时消息</strong>的一种方法。</p><p>比如，将 TTL 设置 为 <code>1</code>，则遇到第一个路由器，就牺牲了，接着返回 ICMP 差错报文网络包，类型是<strong>时间超时</strong>。</p><p>接下来将 TTL 设置为 <code>2</code>，第一个路由器过了，遇到第二个路由器也牺牲了，也同时返回了 ICMP 差错报文数据包，如此往复，直到到达目的主机。</p><p>这样的过程，traceroute 就可以拿到了所有的路由器 IP。</p><p>当然有的路由器根本就不会返回这个 ICMP，所以对于有的公网地址，是看不到中间经过的路由的。</p><blockquote><p>发送方如何知道发出的 UDP 包是否到达了目的主机呢？</p></blockquote><p>traceroute 在发送 <code>UDP</code> 包时，会填入一个<strong>不可能的端口号</strong>值作为 UDP 目标端口号：33434。然后对于每个下一个探针，它都会增加一个，这些端口都是通常认为不会被使用，不过，没有人知道当某些应用程序监听此类端口时会发生什么。</p><p>当目的主机，收到 UDP 包后，会返回 ICMP 差错报文消息，但这个差错报文消息的类型是「<strong>端口不可达</strong>」。</p><p>所以，<strong>当差错报文类型是端口不可达时，说明发送方发出的 UDP 包到达了目的主机。</strong></p><p><em>2. traceroute 作用二</em></p><p>traceroute 还有一个作用是<strong>故意设置不分片，从而确定路径的 MTU</strong>。</p><p>这样做的目的是为了<strong>路径MTU发现</strong>。</p><p>因为有的时候我们并不知道路由器的 <code>MTU</code> 大小，以太网的数据链路上的 <code>MTU</code> 通常是 <code>1500</code> 字节，但是非以太网的 <code>MTU</code> 值就不一样了，所以我们要知道 <code>MTU</code> 的大小，从而控制发送的包大小。</p><p>它的工作原理如下：</p><p>首先在发送端主机发送 <code>IP</code> 数据报时，将 <code>IP</code> 包首部的<strong>分片禁止标志位设置为 1</strong>。根据这个标志位，途中的路由器不会对大数据包进行分片，而是将包丢弃。</p><p>随后，通过一个 ICMP 的不可达消息将<strong>数据链路上 MTU 的值</strong>一起给发送主机，不可达消息的类型为「<strong>需要进行分片但设置了不分片位</strong>」。</p><p>发送主机端每次收到 ICMP 差错报文时就<strong>减少</strong>包的大小，以此来定位一个合适的 <code>MTU</code> 值，以便能到达目标主机。</p><h2 id="断网了还能ping通127-0-0-1吗" tabindex="-1"><a class="header-anchor" href="#断网了还能ping通127-0-0-1吗"><span>断网了还能ping通127.0.0.1吗？</span></a></h2><h3 id="什么是127-0-0-1" tabindex="-1"><a class="header-anchor" href="#什么是127-0-0-1"><span>什么是127.0.0.1</span></a></h3><p>首先，这是个 <code>IPV4</code> 地址。</p><p><code>IPV4</code> 地址有 <code>32</code> 位，一个字节有 <code>8</code> 位，共 <code>4</code> 个字节。</p><p>其中<strong>127 开头的都属于回环地址</strong>，也是 <code>IPV4</code> 的特殊地址，没什么道理，就是人为规定的。</p><p>ping 作为一个小软件，它的功能比较简单，就是<strong>尝试</strong>发送一个小小的消息到目标机器上，判断目的机器是否<strong>可达</strong>，其实也就是判断目标机器网络是否能连通。</p><h5 id="tcp和ping数据的区别" tabindex="-1"><a class="header-anchor" href="#tcp和ping数据的区别"><span>TCP和Ping数据的区别：</span></a></h5><p>在 TCP 传输中创建的方式是 <code>socket(AF_INET, SOCK_STREAM, 0);</code>，其中 <code>AF_INET</code> 表示将使用 IPV4 里 <strong>host:port</strong> 的方式去解析待会你输入的网络地址。<code>SOCK_STREAM</code> 是指使用面向字节流的 TCP 协议，<strong>工作在传输层</strong>。</p><p>创建好了 <code>socket</code> 之后，就可以愉快的把要传输的数据写到这个文件里。调用 socket 的<code>sendto</code>接口的过程中进程会从<strong>用户态进入到内核态</strong>，最后会调用到 <code>sock_sendmsg</code> 方法。</p><p>然后进入传输层，带上<code>TCP</code>头。网络层带上<code>IP</code>头，数据链路层带上 <code>MAC</code>头等一系列操作后。进入网卡的<strong>发送队列 ring buffer</strong> ，顺着网卡就发出去了。</p><p>回到 <code>ping</code> ，创建 <code>socket</code> 的时候用的是 <code>socket(AF_INET,SOCK_RAW,IPPROTO_ICMP)</code>，<code>SOCK_RAW</code> 是原始套接字 ，<strong>工作在网络层</strong>，ping 在进入内核态后最后也是调用的 <code>sock_sendmsg</code> 方法，进入到网络层后加上<strong>ICMP和IP头</strong>后，数据链路层加上<strong>MAC头</strong>，也是顺着网卡发出。</p><h4 id="为什么断网了还能ping通127-0-0-1" tabindex="-1"><a class="header-anchor" href="#为什么断网了还能ping通127-0-0-1"><span>为什么断网了还能ping通127.0.0.1？</span></a></h4><p>当发现<strong>目标IP是回环地址</strong>时，就会选择<strong>本地网卡</strong>。</p><p>本地网卡会把数据推到一个叫 <code>input_pkt_queue</code> 的 **链表**中。这个链表，其实是所有网卡共享的，上面挂着发给本机的各种消息。消息被发送到这个链表后，会再触发一个<strong>软中断</strong>。</p><p>专门处理软中断&quot;ksoftirqd&quot;（这是个<strong>内核线程</strong>），它在收到软中断后就会立马去链表里把消息取出，然后顺着数据链路层、网络层等层层往上传递最后给到应用程序。</p><p>根本就没有出网络，而是在本机打了一个转又回去了</p><p>ping回环地址和ping本机地址没有什么区别</p><h4 id="_127-0-0-1和localhost和0-0-00有什么区别" tabindex="-1"><a class="header-anchor" href="#_127-0-0-1和localhost和0-0-00有什么区别"><span>127.0.0.1和localhost和0.0.00有什么区别？</span></a></h4><p>127.0.0.1是一个回环地址，localhost是一个域名默认等于127.0.0.1</p><p>其次就是 <code>0.0.0.0</code>，执行 ping 0.0.0.0 ，是会失败的，因为它在<code>IPV4</code>中表示的是无效的<strong>目标地址</strong>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ping</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0.0.0.0</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">PING</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0.0.0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (0.0.0.0): 56 data bytes</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sendto:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> No</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> route</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> host</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ping:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sendto:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> No</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> route</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> host</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们启动服务器的时候，一般会 <code>listen</code> 一个 IP 和端口，等待客户端的连接。</p><p>如果此时 <code>listen</code> 的是本机的 <code>0.0.0.0</code> , 那么它表示本机上的<strong>所有IPV4地址</strong>。</p>',58),p={},a=(0,s(6786).A)(p,[["render",function(e,t){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Q3)(" more "),i])}]]),r=JSON.parse('{"path":"/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP/Ping%E7%9A%84%E5%8E%9F%E7%90%86.html","title":"ping的工作原理","lang":"zh-CN","frontmatter":{"title":"ping的工作原理","date":"2023-12-06T00:00:00.000Z","tags":["计算机基础","计算机网络","Ping","网络层"],"categories":["计算机网络"],"head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP/Ping%E7%9A%84%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Flipped"}],["meta",{"property":"og:title","content":"ping的工作原理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-16T10:13:48.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"计算机基础"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:tag","content":"Ping"}],["meta",{"property":"article:tag","content":"网络层"}],["meta",{"property":"article:published_time","content":"2023-12-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-16T10:13:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ping的工作原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-16T10:13:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[{"level":2,"title":"ping的工作原理","slug":"ping的工作原理","link":"#ping的工作原理","children":[]},{"level":2,"title":"断网了还能ping通127.0.0.1吗？","slug":"断网了还能ping通127-0-0-1吗","link":"#断网了还能ping通127-0-0-1吗","children":[{"level":3,"title":"什么是127.0.0.1","slug":"什么是127-0-0-1","link":"#什么是127-0-0-1","children":[]}]}],"git":{"createdTime":1721124828000,"updatedTime":1721124828000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":6.52,"words":1957},"filePathRelative":"demo/计算机网络/IP/Ping的原理.md","localizedDate":"2023年12月6日","excerpt":""}')}}]);