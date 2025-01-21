# HTML 全局属性


## &lt;area&gt;

### 用法

| <div style="width: 100px">属性</div> | <div style="width: 80px">值</div> | 描述及用法 |
|:-|:-|:-|
| alt | 文本 | 规定区域的替代文本。如果存在 href 属性则为必需，比如：<br/> `<map name="planetmap">`<br/>&nbsp;&nbsp;`<area shape="rect" coords="0,0,114,576" href="sun.html" alt="Sun">`<br/>&nbsp;&nbsp;`<area shape="circle" coords="190,230,5" href="mercury.html" alt="Mercury">`<br/>&nbsp;&nbsp;`<area shape="circle" coords="228,230,5" href="venus.html" alt="Venus">`<br/>`</map>` |
| coords | 坐标值 | 规定区域的坐标，比如：<br/>`<map name="planetmap">`<br/>&nbsp;&nbsp;`<area shape="rect" coords="0,0,114,576" href="sun.htm" alt="Sun">`<br/>&nbsp;&nbsp;`<area shape="circle" coords="190,230,5" href="mercur.htm" alt="Mercury">`<br/>&nbsp;&nbsp;`<area shape="circle" coords="228,230,5" href="venus.htm" alt="Venus">`<br/>&nbsp;&nbsp;`</map>` |
| download | 文件名 | 规定当用户单击超链接时将下载目标，比如：<br/> |
| href | URL | 规定区域的超链接目标，比如：<br/> |
| hreflang | 语言代码 | 规定目标 URL 的语言，比如：<br/> |
| media | 媒体查询 | 规定目标 URL 优化的媒体/设备，比如：<br/> |
| referrerpolicy | no-referrer<br/>no-referrer-when-downgrade<br/>origin<br/>origin-when-cross-origin<br/>same-origin<br/>strict-origin-when-cross-origin<br/>unsafe-url | 规定要与链接一起发送的引用信息，比如：<br/> |
| rel | alternate<br/>author<br/>bookmark<br/>help<br/>license<br/>next<br/>nofollow<br/>noreferrer<br/>prefetch<br/>prev<br/>search<br/>tag | 规定当前文档和目标 URL 之间的关系，比如：<br/> |
| shape | default<br/>rect<br/>circle<br/>poly | 规定区域的形状，比如：<br/> |
| target | _blank<br/>_parent<br/>_self<br/>_top<br/>框架名称 | 规定在何处打开目标 URL，比如：<br/> |
| type | 媒体类型 | 规定目标 URL 的媒体类型，比如：<br/> |