# 初始化静态页面模板（PC版）
v1.0.0 by 午点科技
<br>

### 一、注意事项
1. 请使用2.2.4版本的jquery，也可用vue2.x

2. favicon尺寸应为32\*32/48\*48/64\*64，格式应为ico/png/gif

3. 一般情况，引入样式的`<link>`应该放在`<head>`中，因为样式应该优先加载，才能保证页面在刚打开时不错乱

4. 对于一些不需要一开始就载入的JS文件，可以把`<script>`放在文档底部以加快页面打开速度

5. 利用浏览器的缓存机制，可以在首页载入其他页面需要的js、css文件（反之，可以提高首页加载速度）

6. 代码发布时，应当压缩css、js等文件，压缩文件的名称后面要跟.min，例如main.min.css
<br>

### 二、SEO优化
1. 一个页面中应该有且只有一个`<h1>`，其包含 网站名称/首页链接/核心关键词 等等，应该放在文档顶部，越接近`<body>`越好，多次使用`<h1>`会被搜索引擎视为作弊，反而降低seo效果
<br>

### 三、常用

**版权信息的写法**

>参考：[https://10.1pxeye.com/footer-copyright/](https://10.1pxeye.com/footer-copyright/)

示例：
```html
<div class="m-copyright">Copyright &copy; 2019 <a href="">公司名称</a> All Right Reserved</div>
```
<br>

**2. 百度地图**

[百度地图开放平台](http://lbsyun.baidu.com/)
```html
<div class="cmap" id="allmap" style="width: 770px; height: 360px;">
  <!-- 770px 360px -->
</div>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=4E5A3Fb789138a0ab8431f42a887aea1"></script>
<script type="text/javascript">
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(116.404, 39.915);
  var marker = new BMap.Marker(point);  // 创建标注
  map.addOverlay(marker);              // 将标注添加到地图中
  map.centerAndZoom(point, 11);        // 初始化地图，设置中心点坐标和地图级别 
  map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
  var opts = {
    width: 300,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title: "公司名称", // 信息窗口标题
  }
  var infoWindow = new BMap.InfoWindow("地址：公司所在地", opts);  // 创建信息窗口对象
  map.openInfoWindow(infoWindow, point); //开启信息窗口
</script>
```
<br>

**3. 富文本内容样式不尽人意？**

限制即可：
```scss
.rich-text {
  img { max-width: 100%!important; height: auto!important; }
  pre { white-space: pre-wrap!important; }
}
```
<br>

### 四、插件

**1. Swiper**

大名鼎鼎的swiper，是开发网站利器，各式各样的轮播图、tab切换等效果，没有它做不到的，只是你没研究到位

中文文档：[https://www.swiper.com.cn/](https://www.swiper.com.cn/)

<br>