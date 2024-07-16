"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[8133],{2789:(e,t)=>{t.A=(e,t)=>{const o=e.__vccOpts||e;for(const[e,s]of t)o[e]=s;return o}},2862:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>p,data:()=>r});var s=o(7829);const c=o.p+"assets/img/2024-05-16-20-38-19.792bb072.png",n=(0,s.Fv)('<h3 id="针对tcp应该如何socket编程" tabindex="-1"><a class="header-anchor" href="#针对tcp应该如何socket编程"><span>针对TCP应该如何socket编程？</span></a></h3><ul><li>服务端创建一个监听<code>socket</code>和客户端初始化用来通信的 <code>socket</code>，得到文件描述符；</li><li>服务端调用 <code>bind</code>，将 socket 绑定在指定的 IP 地址和端口;</li><li>服务端调用 <code>listen</code>，进行监听；</li><li>服务端调用 <code>accept</code>，等待客户端连接；</li><li>客户端调用 <code>connect</code>，向服务端的地址和端口发起连接请求；</li><li>服务端 <code>accept</code> 返回一个新创建的用于传输的 <code>socket</code>（已完成的） 的文件描述符；</li><li>客户端调用 <code>write</code> 写入数据；服务端调用 <code>read</code> 读取数据；</li><li>客户端断开连接时，会调用 <code>close</code>，那么服务端 <code>read</code> 读取数据的时候，就会读取到了 <code>EOF</code>，待处理完数据后，服务端调用 <code>close</code>，表示连接关闭。</li></ul><p>监听的 socket 和真正用来传送数据的 socket，是「两个」 socket，一个叫作<strong>监听 socket</strong>，一个叫作<strong>已完成连接 socket</strong>。</p><h3 id="listen-时候参数-backlog-的意义" tabindex="-1"><a class="header-anchor" href="#listen-时候参数-backlog-的意义"><span>listen 时候参数 backlog 的意义？</span></a></h3><ul><li>半连接队列（SYN 队列）：接收到一个 SYN 建立连接请求，处于 SYN_RCVD 状态；</li><li>全连接队列（Accpet 队列）：已完成 TCP 三次握手过程，处于 ESTABLISHED 状态；</li></ul><p><strong>所以现在通常认为 backlog 是 accept 队列。</strong></p><p><strong>但是上限值是内核参数 somaxconn 的大小，也就说 accpet 队列长度 = min(backlog, somaxconn)。</strong></p><h3 id="accept-发生在三次握手的哪一步" tabindex="-1"><a class="header-anchor" href="#accept-发生在三次握手的哪一步"><span>accept 发生在三次握手的哪一步？</span></a></h3><p><strong>客户端 connect 成功返回是在第二次握手，服务端 accept 成功返回是在三次握手成功之后</strong></p><h3 id="客户端调用-close-了-连接是断开的流程是什么" tabindex="-1"><a class="header-anchor" href="#客户端调用-close-了-连接是断开的流程是什么"><span>客户端调用 close 了，连接是断开的流程是什么？</span></a></h3><ul><li>客户端调用 <code>close</code>，表明客户端没有数据需要发送了，则此时会向服务端发送 FIN 报文，进入 FIN_WAIT_1 状态；</li><li>服务端接收到了 FIN 报文，TCP 协议栈会为 FIN 包插入一个文件结束符 <code>EOF</code> 到接收缓冲区中，应用程序可以通过 <code>read</code> 调用来感知这个 FIN 包。这个 <code>EOF</code> 会被<strong>放在已排队等候的其他已接收的数据之后</strong>，这就意味着服务端需要处理这种异常情况，因为 EOF 表示在该连接上再无额外数据到达。此时，服务端进入 CLOSE_WAIT 状态；</li><li>接着，当处理完数据后，自然就会读到 <code>EOF</code>，于是也调用 <code>close</code> 关闭它的套接字，这会使得服务端发出一个 FIN 包，之后处于 LAST_ACK 状态；</li></ul><h2 id="服务端没有调用listen-客户端请求建立连接会发生什么" tabindex="-1"><a class="header-anchor" href="#服务端没有调用listen-客户端请求建立连接会发生什么"><span>服务端没有调用Listen,客户端请求建立连接会发生什么？</span></a></h2><p><strong>服务端如果只 bind 了 IP 地址和端口，而没有调用 listen 的话，然后客户端对服务端发起了连接建立，服务端会回 RST 报文</strong></p><h4 id="没有listen可以建立tcp连接吗" tabindex="-1"><a class="header-anchor" href="#没有listen可以建立tcp连接吗"><span>没有listen可以建立TCP连接吗？</span></a></h4><p><strong>是可以的，客户端是可以自己连自己的形成连接（TCP自连接），也可以两个客户端同时向对方发出请求建立连接（TCP同时打开），这两个情况都有个共同点，就是没有服务端参与，也就是没有listen，就能建立连接</strong>。</p><p>因为客户端没有执行listen，因为半连接队列和全连接队列都是在执行 listen 方法时，内核自动创建的。</p><p>但内核还有个全局 hash 表，可以用于存放 sock 连接的信息。</p><p>这个全局 hash 表其实还细分为 ehash，bhash和listen_hash等，但因为过于细节，大家理解成有一个全局 hash 就够了，</p><p><strong>在 TCP 自连接的情况中，客户端在 connect 方法时，最后会将自己的连接信息放入到这个全局 hash 表中，然后将信息发出，消息在经过回环地址重新回到 TCP 传输层的时候，就会根据 IP + 端口信息，再一次从这个全局 hash 中取出信息。于是握手包一来一回，最后成功建立连接</strong>。</p><h2 id="没有accpet-能建立tcp连接吗" tabindex="-1"><a class="header-anchor" href="#没有accpet-能建立tcp连接吗"><span>没有Accpet，能建立TCP连接吗？</span></a></h2><p>建立连接的过程中根本不需要<code>accept()</code>参与， <strong>执行accept()只是为了从全连接队列里取出一条连接。</strong></p><h4 id="为什么半连接队列要设计成哈希表" tabindex="-1"><a class="header-anchor" href="#为什么半连接队列要设计成哈希表"><span>为什么半连接队列要设计成哈希表？</span></a></h4><p><strong>全连接里队列</strong>，他本质是个链表，因为也是线性结构，说它是个队列也没毛病。它里面放的都是已经建立完成的连接，这些连接正等待被取走。而服务端取走连接的过程中，并不关心具体是哪个连接，只要是个连接就行，所以直接从队列头取就行了。这个过程算法复杂度为<code>O(1)</code>。</p><p>而<strong>半连接队列</strong>却不太一样，因为队列里的都是不完整的连接，嗷嗷等待着第三次握手的到来。那么现在有一个第三次握手来了，则需要从队列里把相应IP端口的连接取出，<strong>如果半连接队列还是个链表，那我们就需要依次遍历，才能拿到我们想要的那个连接，算法复杂度就是O(n)。</strong></p><p>而如果将半连接队列设计成哈希表，那么查找半连接的算法复杂度就回到<code>O(1)</code>了。</p><p>因此出于效率考虑，全连接队列被设计成链表，而半连接队列被设计为哈希表。</p><h4 id="会有一个cookies队列吗" tabindex="-1"><a class="header-anchor" href="#会有一个cookies队列吗"><span>会有一个cookies队列吗</span></a></h4><p>实际上<code>cookies</code>并不会有一个专门的队列保存，它是通过<strong>通信双方的IP地址端口、时间戳、MSS</strong>等信息进行<strong>实时计算</strong>的，保存在<strong>TCP报头</strong>的<code>seq</code>里。</p><h4 id="cookies方案为什么不直接取代半连接队列" tabindex="-1"><a class="header-anchor" href="#cookies方案为什么不直接取代半连接队列"><span>cookies方案为什么不直接取代半连接队列？</span></a></h4><p>凡事皆有利弊，<code>cookies</code>方案虽然能防 <strong>SYN Flood攻击</strong>，但是也有一些问题。因为服务端并不会保存连接信息，所以如果传输过程中数据包丢了，也不会重发第二次握手的信息。</p><p>另外，编码解码<code>cookies</code>，都是比较<strong>耗CPU</strong>的，利用这一点，如果此时攻击者构造大量的<strong>第三次握手包（ACK包）</strong>，同时带上各种瞎编的<code>cookies</code>信息，服务端收到<code>ACK包</code>后<strong>以为是正经cookies</strong>，憨憨地跑去解码（<strong>耗CPU</strong>），最后发现不是正经数据包后才丢弃。</p><p>这种通过构造大量<code>ACK包</code>去消耗服务端资源的攻击，叫<strong>ACK攻击</strong>，受到攻击的服务器可能会因为<strong>CPU资源耗尽</strong>导致没能响应正经请求。</p><h2 id="tcp和udp可以同时绑定相同的端口吗" tabindex="-1"><a class="header-anchor" href="#tcp和udp可以同时绑定相同的端口吗"><span>TCP和UDP可以同时绑定相同的端口吗？</span></a></h2><h4 id="_1-tcp和udp可以同时绑定相同的端口吗" tabindex="-1"><a class="header-anchor" href="#_1-tcp和udp可以同时绑定相同的端口吗"><span>1.TCP和UDP可以同时绑定相同的端口吗？</span></a></h4><p>可以</p><blockquote><p>在数据链路层中，通过 MAC 地址来寻找局域网中的主机。在网际层中，通过 IP 地址来寻找网络中互连的主机或路由器。在传输层中，需要通过端口进行寻址，来识别同一计算机中同时通信的不同应用程序。</p></blockquote><p>TCP和UDP在内核中是两个<strong>完全独立</strong>的软件模块：当主机接收到一个数据包，跟据数据包的头部，确定是TCP还是UDP然后交给对应的模块，然后模块处理之后跟据<strong>端口号</strong>发送给对应的应用程序</p><h4 id="_2-多个tcp可以同时绑定一个端口吗" tabindex="-1"><a class="header-anchor" href="#_2-多个tcp可以同时绑定一个端口吗"><span>2.<strong>多个TCP可以同时绑定一个端口吗？</strong></span></a></h4><p><strong>如果两个 TCP 服务进程同时绑定的 IP 地址和端口都相同，那么执行 bind() 时候就会出错，错误是“Address already in use”</strong>。</p><p>但是如果ip不同端口相同的话就可以绑定</p><p>但是如果 TCP 绑定的<strong>地址是 0.0.0.0 和端口 8888</strong>，而如果 另一个TCP 绑定的地址是<strong>其他地址和端口 8888</strong>，那么执行 bind() 时候也会出错。（这是因为 0.0.0.0 地址比较特殊，代表任意地址，意味着绑定了 0.0.0.0 地址，相当于把主机上的所有 IP 地址都绑定了。）</p><p>这个问题也可以由 SO_REUSEADDR 解决，因为它的<strong>另外一个作用</strong>：绑定的 IP地址 + 端口时，只要 IP 地址不是正好(exactly)相同，那么允许绑定。</p><h4 id="_3-重启-tcp-服务进程时-为什么会有-address-in-use-的报错信息" tabindex="-1"><a class="header-anchor" href="#_3-重启-tcp-服务进程时-为什么会有-address-in-use-的报错信息"><span><strong>3.重启 TCP 服务进程时，为什么会有“Address in use”的报错信息？</strong></span></a></h4><p><strong>当 TCP 服务进程重启时，服务端会出现 TIME_WAIT 状态的连接，TIME_WAIT 状态的连接使用的 IP+PORT 仍然被认为是一个有效的 IP+PORT 组合，相同机器上不能够在该 IP+PORT 组合上进行绑定，那么执行 bind() 函数的时候，就会返回了 Address already in use 的错误</strong>。</p><p>等TIME_WAIT结束之后就可以，重启TCP服务</p><h4 id="_4-重启-tcp-服务进程时-如何避免-address-in-use-的报错信息" tabindex="-1"><a class="header-anchor" href="#_4-重启-tcp-服务进程时-如何避免-address-in-use-的报错信息"><span>4.重启 TCP 服务进程时，如何避免“Address in use”的报错信息？</span></a></h4><p>因为 SO_REUSEADDR 作用是：<strong>如果当前启动进程绑定的 IP+PORT 与处于TIME_WAIT 状态的连接占用的 IP+PORT 存在冲突，但是新启动的进程使用了 SO_REUSEADDR 选项，那么该进程就可以绑定成功</strong></p><h4 id="_5-客户端的端口可以重复使用吗" tabindex="-1"><a class="header-anchor" href="#_5-客户端的端口可以重复使用吗"><span><strong>5.客户端的端口可以重复使用吗？</strong></span></a></h4><p><strong>CP 连接是由四元组（源IP地址，源端口，目的IP地址，目的端口）唯一确认的，那么只要四元组中其中一个元素发生了变化，那么就表示不同的 TCP 连接的。所以如果客户端已使用端口 64992 与服务端 A 建立了连接，那么客户端要与服务端 B 建立连接，还是可以使用端口 64992 的，因为内核是通过四元祖信息来定位一个 TCP 连接的，并不会因为客户端的端口号相同，而导致连接冲突的问题。</strong></p><h4 id="_6-多个客户端可以-bind-同一个端口吗" tabindex="-1"><a class="header-anchor" href="#_6-多个客户端可以-bind-同一个端口吗"><span><strong>6.多个客户端可以 bind 同一个端口吗？</strong></span></a></h4><p>要看多个客户端绑定的 IP + PORT 是否都相同，如果都是相同的，那么在执行 bind() 时候就会出错，错误是“Address already in use”。</p><p>一般而言，客户端不建议使用 bind 函数，应该交由 connect 函数来选择端口会比较好，因为客户端的端口通常都没什么意义。</p><h4 id="_7-客户端-tcp-连接-time-wait-状态过多-会导致端口资源耗尽而无法建立新的连接吗" tabindex="-1"><a class="header-anchor" href="#_7-客户端-tcp-连接-time-wait-状态过多-会导致端口资源耗尽而无法建立新的连接吗"><span>7.客户端 TCP 连接 TIME_WAIT 状态过多，会导致端口资源耗尽而无法建立新的连接吗？</span></a></h4><p>针对这个问题，也是有解决办法的，那就是打开 <code>net.ipv4.tcp_tw_reuse</code> 这个内核参数。</p><p><strong>因为开启了这个内核参数后，客户端调用 connect 函数时，如果选择到的端口，已经被相同四元组的连接占用的时候，就会判断该连接是否处于 TIME_WAIT 状态，如果该连接处于 TIME_WAIT 状态并且 TIME_WAIT 状态持续的时间超过了 1 秒，那么就会重用这个连接，然后就可以正常使用该端口了。</strong></p><p>开启了 net.ipv4.tcp_tw_reuse 内核参数，是客户端（连接发起方） 在调用 connect() 函数时才起作用，所以在服务端开启这个参数是没有效果的。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',57),a={},p=(0,o(2789).A)(a,[["render",function(e,t){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Q3)(" more "),n])}]]),r=JSON.parse('{"path":"/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84socket%E7%BC%96%E7%A8%8B.html","title":"TCP的socket编程","lang":"zh-CN","frontmatter":{"title":"TCP的socket编程","date":"2023-11-26T00:00:00.000Z","tags":["计算机基础","计算机网络","TCP"],"categories":["计算机网络"],"head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84socket%E7%BC%96%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"博客主页"}],["meta",{"property":"og:title","content":"TCP的socket编程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-16T10:13:48.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"计算机基础"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:tag","content":"TCP"}],["meta",{"property":"article:published_time","content":"2023-11-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-16T10:13:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP的socket编程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-16T10:13:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[{"level":3,"title":"针对TCP应该如何socket编程？","slug":"针对tcp应该如何socket编程","link":"#针对tcp应该如何socket编程","children":[]},{"level":3,"title":"listen 时候参数 backlog 的意义？","slug":"listen-时候参数-backlog-的意义","link":"#listen-时候参数-backlog-的意义","children":[]},{"level":3,"title":"accept 发生在三次握手的哪一步？","slug":"accept-发生在三次握手的哪一步","link":"#accept-发生在三次握手的哪一步","children":[]},{"level":3,"title":"客户端调用 close 了，连接是断开的流程是什么？","slug":"客户端调用-close-了-连接是断开的流程是什么","link":"#客户端调用-close-了-连接是断开的流程是什么","children":[]},{"level":2,"title":"服务端没有调用Listen,客户端请求建立连接会发生什么？","slug":"服务端没有调用listen-客户端请求建立连接会发生什么","link":"#服务端没有调用listen-客户端请求建立连接会发生什么","children":[]},{"level":2,"title":"没有Accpet，能建立TCP连接吗？","slug":"没有accpet-能建立tcp连接吗","link":"#没有accpet-能建立tcp连接吗","children":[]},{"level":2,"title":"TCP和UDP可以同时绑定相同的端口吗？","slug":"tcp和udp可以同时绑定相同的端口吗","link":"#tcp和udp可以同时绑定相同的端口吗","children":[]}],"git":{"createdTime":1721124828000,"updatedTime":1721124828000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":9.13,"words":2740},"filePathRelative":"demo/计算机网络/TCP/TCP的socket编程.md","localizedDate":"2023年11月26日","excerpt":""}')}}]);