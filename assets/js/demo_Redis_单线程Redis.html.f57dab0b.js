"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[3346],{6786:(e,i)=>{i.A=(e,i)=>{const t=e.__vccOpts||e;for(const[e,s]of i)t[e]=s;return t}},801:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>o,data:()=>l});var s=t(2758);const r=[(0,s.Fv)('<h3 id="redis是单线程的吗" tabindex="-1"><a class="header-anchor" href="#redis是单线程的吗"><span>redis是单线程的吗？</span></a></h3><p><strong>Redis 单线程指的是[接收客户端请求→解析请求→进行数据读写等操作→发送数据给客户端] 这个过程是由一个线程 (主线程)来完成的</strong></p><p>Redis 程并不是单线程的，Redis 在启动的时候，是会启动<strong>后台线程 (BIO)</strong></p><ul><li>Redis 在 2.6 版本，会启动 2 个后台线程，分别处理关闭文件、AOF 刷盘这两个任务;</li><li>Redis 在 4.0 版本之后，新增了一个新的后台线程，用来异步释放 Redis 内存，也就是 lazyfree 线程</li></ul><p>关闭文件、AOF 刷盘、释放内存这三个任务都有各自的任务队列:</p><ol><li>BIO_CLOSE_FILE，关闭文件任务队列: 当队列有任务后，后台线程会调用 close(fd)，将文件关闭</li><li>BIO_AOF_FSYNC，AOF刷盘任务队列: 当 AOF 日志配置成 everysec 选项后，主线程会把 AOF 写日志操作封装成一个任务，也放到队列中。当发现队列有任务后，后台线程会调用 fsync(fd)，将 AOF 文件刷盘，</li><li>BIO LAZY FREE，lazy free 任务队列: 当队列有任务后，后台线程会 free(obi) 释放对象/free(dict)删除数据库所有对象/free(skiplist) 释放跳表对象</li></ol><h3 id="redis单线程还这么快" tabindex="-1"><a class="header-anchor" href="#redis单线程还这么快"><span>Redis单线程还这么快</span></a></h3><ol><li>Redis是<strong>基于内存</strong>的，大部分操作都在内存中完成</li><li>Redis<strong>单线程模型避免多线程之间的竞争</strong>，也省去了多线程之间切换带来的时间和性能上的开销</li><li>Redis采用<strong>I/O多路复用</strong>处理大量的客户端Socket请求</li></ol><p>Redis采用单线程的原因：CPU不是制约Redis性能表现的瓶颈，减少系统复杂度，同时不会存在在线程切换、加锁解锁、死锁的问题</p><p>后面采用多线程的原因：网络硬件性能的提升，Redis的性能瓶颈也会出现在网络I/O上，索引在6.0之后Redis采用多线程，提升了Redis的I/O性能，默认还是一个线程处理命令但是也可以自己设置</p>',10)],d={},o=(0,t(6786).A)(d,[["render",function(e,i){return(0,s.uX)(),(0,s.CE)("div",null,r)}]]),l=JSON.parse('{"path":"/demo/Redis/%E5%8D%95%E7%BA%BF%E7%A8%8BRedis.html","title":"redis是”单线程“","lang":"zh-CN","frontmatter":{"title":"redis是”单线程“","date":"2022-03-15T00:00:00.000Z","tags":["redis"],"categories":["redis","单线程"],"description":"redis是单线程的吗？ Redis 单线程指的是[接收客户端请求→解析请求→进行数据读写等操作→发送数据给客户端] 这个过程是由一个线程 (主线程)来完成的 Redis 程并不是单线程的，Redis 在启动的时候，是会启动后台线程 (BIO) Redis 在 2.6 版本，会启动 2 个后台线程，分别处理关闭文件、AOF 刷盘这两个任务; Redis...","head":[["meta",{"property":"og:url","content":"https://flipped1001.cn/demo/Redis/%E5%8D%95%E7%BA%BF%E7%A8%8BRedis.html"}],["meta",{"property":"og:site_name","content":"Flipped"}],["meta",{"property":"og:title","content":"redis是”单线程“"}],["meta",{"property":"og:description","content":"redis是单线程的吗？ Redis 单线程指的是[接收客户端请求→解析请求→进行数据读写等操作→发送数据给客户端] 这个过程是由一个线程 (主线程)来完成的 Redis 程并不是单线程的，Redis 在启动的时候，是会启动后台线程 (BIO) Redis 在 2.6 版本，会启动 2 个后台线程，分别处理关闭文件、AOF 刷盘这两个任务; Redis..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-10T10:25:42.000Z"}],["meta",{"property":"article:author","content":"Flipped"}],["meta",{"property":"article:tag","content":"redis"}],["meta",{"property":"article:published_time","content":"2022-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-10T10:25:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redis是”单线程“\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-10T10:25:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flipped\\"}]}"]]},"headers":[{"level":3,"title":"redis是单线程的吗？","slug":"redis是单线程的吗","link":"#redis是单线程的吗","children":[]},{"level":3,"title":"Redis单线程还这么快","slug":"redis单线程还这么快","link":"#redis单线程还这么快","children":[]}],"git":{"createdTime":1723285542000,"updatedTime":1723285542000,"contributors":[{"name":"flipped1001","email":"3154147351@qq.com","commits":1}]},"readingTime":{"minutes":1.82,"words":547},"filePathRelative":"demo/Redis/单线程Redis.md","localizedDate":"2022年3月15日","excerpt":"<h3>redis是单线程的吗？</h3>\\n<p><strong>Redis 单线程指的是[接收客户端请求→解析请求→进行数据读写等操作→发送数据给客户端] 这个过程是由一个线程 (主线程)来完成的</strong></p>\\n<p>Redis 程并不是单线程的，Redis 在启动的时候，是会启动<strong>后台线程 (BIO)</strong></p>\\n<ul>\\n<li>Redis 在 2.6 版本，会启动 2 个后台线程，分别处理关闭文件、AOF 刷盘这两个任务;</li>\\n<li>Redis 在 4.0 版本之后，新增了一个新的后台线程，用来异步释放 Redis 内存，也就是 lazyfree 线程</li>\\n</ul>","autoDesc":true}')}}]);