# CSS3 入门学习
## 第一章 初识CSS3
### 1.1 什么是CSS3
CSS3是CSS2的升级版本，3只是版本号，它在CSS2.1的基础上增加了很多强大的新功能。 目前主流浏览器chrome、safari、firefox、opera、甚至360都已经支持了CSS3大部分功能了，IE10以后也开始全面支持CSS3了。

| 前缀        | 浏览器 |
| --------   | -----: |
| -webkit    | chrome和safari |
| -moz       |   firefox  |
| -ms        |    IE   |
| -o         |   opera  |

### 1.2 CSS3可以做什么

**选择器**
以前我们通常用class、 ID 或 tagname 来选择HTML元素，CSS3的选择器强大的难以置信。它们可以减少在标签中的class和ID的数量更方便的维护样式表、更好的实现结构与表现的分离。

**圆角效果**
以前做圆角通常使用背景图片，或繁琐的元素拼凑，现在很简单了 border-radius 帮你轻松搞定

**块阴影与文字阴影**
可以对任意的DIV和文字增加投影效果

**色彩**
CSS3支持更多的颜色和更广泛的颜色定义。新颜色CSS3支持HSL，CMYK，HSLA和RGBA。

**渐变效果**
以前只能用Photoshop做出的图片渐变效果，现在可以用CSS写出来了。IE中滤镜也可以实现。

**个性化字体**
使用`@Font-Face`可以轻松实现定制字体。

**多背景图**
一个元素添加多层背景图片。

**边框背景图**
边框应用背景图片。

**变形处理**
可以对HTML元素进行旋转、缩放、倾斜、移动甚至以前只能用JavaScript实现的强大动画。

**多栏布局**
可以让你不用使用多个div标签就能实现多栏布局。浏览器解释这个属性并生成多栏，让文本实现一个仿报纸的多栏结构

**媒体查询**
针对不同的屏幕分辨率，应用不同的样式。

## 第二章 边框

### 2.1 圆角效果 **border-radius**

**border-radius是向元素添加圆角边框**

**使用方法**

``` css
border-radius: 10px;	/* 所有角都使用半径为10px的圆角 */

border-radius: 5px 4px 3px 2px;	/* 四个半径值分别是左上角、右上角、右下角和左下角，顺时针 */
```

不要以为`border-radius`的值只能用`px`单位，你还可以用**百分比**或者**em**，但是兼容性目前还不是很好。

**实心上半圆**

> 方法：把高度(height)设为宽度(width)的一半，并且只设置为左上角和右上角的半径和元素的高度一致(大于也是可以的)。

```css
div {
	height: 50px;	/* 是width的一半 */
	width: 100px;
	background: #9da;
	border-radius: 50px 50px 0 0;	/* 半径至少设置为height的值 */
}
```

**实心圆**

> 方法：把宽度（width）与高度(height)值设置为一致（也就是正方形），并且四个圆角值都设置为它们值的一半。

```css
div {
	height: 100px;	/* 与width设置一致 */
	width: 100px;
	background: #9da;
	border-radius: 50px;	/* 四个圆角值都设置为宽度或高度值的一半 */
}
```

### 2.2 阴影 **box-shadow**

`box-shadow` 是向盒子添加阴影。支持添加一个或者多个。

`box-shadow: X轴偏移量 Y轴偏移量 [阴影模糊半径] [阴影扩展半径] [阴影颜色] [投影方式];`

**参数详细**

| 值       | 描述 |
| --------   | -----: |
| X轴偏移量    | 必需，水平阴影的位置，允许负值 |
| Y轴偏移量    | 必需，垂直阴影的位置，允许负值 |
| 阴影模糊半径  | 可选，模糊距离 |
| 投影颜色  | 可选，阴影的颜色。省略默认为黑色 |
| 投影方式  | 可选(设置inset时为内部投影方式，默认外阴影) |

> `inset`可以写在参数的第一个或最后一个，其他位置是无效的。

**为元素设置外阴影**

```css
.box_shadow {
	box-shadow: 4px 2px 6px #333333;
}
```

**为元素设置内阴影**

```css
.box_shadow {
	box-shadow: 4px 2px 6px #333333 inset;
}
```

**添加多个阴影**

```css
.box_shadow {
	box-shadow: 4px 2px 6px #f00, -4px -2px 6px #000, 0px 0px 12px 5px #33CC00 inset;
}
```

**疑惑辨析**

* `阴影模糊半径`和`阴影扩展半径`的区别
**阴影模糊半径**：阴影模糊半径：此参数可选，其值只能是为正值，如果其值为0时，表示阴影不具有模糊效果，其值越大阴影的边缘就越模糊；
**阴影扩展半径**：此参数可选，其值可以是正负值，如果值为正，则整个阴影都延展扩大，反之值为负值时，则缩小；

* `X轴偏移量`和`Y轴偏移量`可以设置为负数
正数为正方向；负数为负方向；

### 2.3 为边框应用图片**border-image**

顾名思义就是为边框应用背景图片

**类似常用的`background`:**
`background: 图片路径 起始位置 平铺方式;`

**`border-image`的语法为：**
`border-image: 图片路径 切割图片的宽度 图片延伸方式`

**参数分析**

| 值       | 描述 |
| --------   | -----: |
| 切割图片的宽度    | 单位为像素，也可以用百分比也可以省略`px`,遵循顺时针的规律来分别设置 |
| 图片延伸方式    | 可选：`round`(平铺), `repeat`(重复), `stretch`(拉伸) |

想象一下：一个矩形，有四个边框。如果应用了边框图片，图片该怎么分布呢？ 图片会自动被切割分成四等分。用于四个边框。

可以理解为它是一个切片工具，会自动把用做边框的图片切割。怎么切割呢？为了方便理解，做了一张特殊的图片，由9个矩形（70 * 70像素）拼成的一张图（210 * 210像素），并标注好序号，是不是像传说中的九宫图，如下

![nice](./nice.png)

把上图当作边框图片来应用查看结果

```css
#border-image {
	background: #F4FFFA;
	width: 210px;
	height: 210px;
	border: 70px solid #ddd;
	border-image: url(borderimg.png) 70 repeat;
}
```

效果为：

![fluence](./fluence.png)

从序号可以看出div的四个角分别对应了背景图片的四个角。而2,4,6,8 被重复。而因为是从四周向中心切割图片的所以，5显示不出来.

## 第三章 颜色相关

### 3.1 RGBA

**RGB是一种色彩标准，是由红(R)、绿(G)、蓝(B)的变化以及相互叠加来得到各式各样的颜色。RGBA是在RGB的基础上增加了控制alpha透明度的参数。**

语法：

```css
color: rgba(R, G, B, A);
```

以上R、G、B三个参数，正整数值的取值范围为：0 - 255。百分数值的取值范围为：0.0% - 100.0%。超出范围的数值将被截至其最接近的取值极限。并非所有浏览器都支持使用百分数值。A为透明度参数，取值在0~1之间，不可为负值。

代码示例：

```css
background-color: rgba(100, 200, 60, 0.5);
```

### 3.2 渐变色彩

**CSS3 Gradient** 分为 **线性渐变(linear)** 和 **径向渐变(radial)** 。由于不同的渲染引擎实现渐变的语法不同，这里我们只针对线性渐变的 W3C 标准语法来分析其用法，其余大家可以查阅相关资料。W3C 语法已经得到了 IE10+、Firefox19.0+、Chrome26.0+ 和 Opera12.1+等浏览器的支持。

语法：

``` css
渐变类型（渐变方向, 渐变颜色）
```

参数分析：

| 值 | 描述 |
|-----|------|
| 渐变类型 | 线性渐变(linear-gradient)， 径向渐变(radial-gradient) |
| 渐变方向 | 可以用"**角度**"的关键词或“**英文**”来表示，缺省为“180 deg”，等同“to bottom” |
| 渐变颜色 | 可以两个或者多个颜色值 |

渐变方向：

| 角度 | 用英文 | 作用 |
|-------|-------|-------|
| 0 deg | to top | 从下向上 |
| 90 deg | to right | 从左到右 |
| 180 deg | to bottom | 从上向下 |
| 270 deg | to left | 从右向左 |
| &nbsp; | to top left | 右下角到左上角 |
| &nbsp; | to top right | 左下角到右上角 |

示例：

```css
background: linear-gradient(to left, red, orange, yellow, green, blue, indigo, violet);flu
```

效果图为：

![flunce](./flunce2.png)

## 第四章 文字和字体

### 4.1 text-overflow 与 word-wrap

`text-overflow`用来设置是否使用一个 **省略标记(...)** 标示对象内文本的溢出。

语法：

```css
text-overflow: clip | ellipsis
```

但是`text-overflow`只是用来说明文字溢出时用什么方式显示，要实现溢出时产生省略号的效果，还须定义强制文本在一行内显示（`white-space:nowrap`）及溢出内容为隐藏（`overflow:hidden`），只有这样才能实现溢出文本显示省略号的效果，代码如下:

```css
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
```

同时，word-wrap也可以用来设置文本行为，当前行超过指定容器的边界时是否断开转行。

语法:

```css
word-wrap: normal | break-word
```

`normal`为浏览器默认值，`break-word`设置在**长单词**或**URL地址**内部进行换行。

### 4.2 嵌入字体 `@font-face`

**`@font-face`能够加载服务器端的字体文件，让浏览器端可以显示用户电脑里没有安装的字体.**

语法：

```css
@font-face {
	font-family: 字体名称;
	src: 字体文件在服务器上的相对路径或绝对路径;
}
```

这样设置后，就可以像普通字体在（font-＊）中设置字体样式。

比如：

```css
p {
	font-size: 12px;
	font-family: "My font";		/* 必须项，设置@font-face中的font-family同样的值 */
}
```

### 4.3 文本阴影 `text-shadow`

`text-shadow` 可以用来设置文本的阴影效果。

语法：

```css
text-shadow: X-Offset Y-Offset blur color;
```

参数分析：

| 值 | 描述 |
|---------|--------|
| X-Offset | 表示阴影的水平偏移距离，其值为正值时阴影向右偏移，反之向左偏移 |
| Y-Offset | 是指阴影的垂直偏移距离，如果其值是正值，阴影向下偏移，反之向上偏移 |
| Blur | 是指阴影的模糊程度，其值不能是负值，如果值越大，阴影越模糊，反之阴影越清晰，如果不需要阴影模糊可以将Blur值设置为0 |
| Color | 是指阴影的颜色，可以使用RGBA色 |


## 第五章 背景样式

### 5.1 backgrond-origin

设置元素背景图片的原始起始位置。

语法： 

```css
background-origin: border-box | padding-box | content-box;
```

参数分别表示背景图片是从 **边框** ，还是 **内边距（默认值）** ，或者是 **内容区域** 开始显示

参数效果如下：

![background-origin](./background-origin.jpg)

> **Pay attention** 如果背景不是 `no-repeat` ，这个属性无效，它会默认从 **边框** 开始显示.

### 5.2 background-clip

用来将背景图片做适当的**裁剪**以适应实际需要。

语法：

```css
background-clip: border-box | padding-box | content-box | no-clip
```

参数分别从 **边框** 或 **内填充**， 或者 **内容区域** 向外裁剪背景。 `no-clip`表示不裁剪， 和参数`border-box`显示同样的效果。`background-clip`默认值为`border-box`.

效果图为：

![backgrond-clip](./background-clip.jpg)

### 5.3 background-size

设置背景图片的大小，以**长度值**或**百分比**显示，还可以通过`cover`和`contain`来对图片进行伸缩。

语法：

```css
background-size: auto | <长度值> | <百分比> | cover | contain 
```

参数说明：

| 值 | 描述 |
|-----|-------|
| auto | 默认值，不改变背景图片的原始高度和宽度 |
| <长度值> | 成对出现，如200px 50px ，将背景图片宽高依次设置为前面两个值，当设置一个值时，将其作为图片宽度值来等比缩放 |
| <百分比> | 0%－100%之间的任何值，将背景图片宽高依次设置为所在元素宽高乘以前面百分比得出的数值，当设置一个值时同上|
| cover | 顾名思义为覆盖，即将背景图片等比缩放以填满整个容器 |
| contain | 容纳，即将背景图片等比缩放至某一边紧贴容器边缘为止 |

### 5.4 multiple background

多重背景，也就是CSS2里`background`的属性外加`origin`、`clip`和`size`组成的新`background`的多次叠加，缩写时为用逗号隔开的每组值；用分解写法时，如果有多个背景图片，而其他属性只有一个（例如`background-repeat`只有一个），表明所有背景图片应用该属性值。

语法缩写如下：

```css
background: [background-color] | [background-image] | [background-position][/background-size] | [background-repeat] | [background-attachment] | [background-clip] | [background-origin],...
```

可以把上面的缩写拆分以下形式：

```css
background-image:url1,url2,...,urlN;
background-repeat : repeat1,repeat2,...,repeatN;
backround-position : position1,position2,...,positionN;
background-size : size1,size2,...,sizeN;
background-attachment : attachment1,attachment2,...,attachmentN;
background-clip : clip1,clip2,...,clipN;
background-origin : origin1,origin2,...,originN;
background-color : color;
```

> **Pay Attention**
> 
> 1. 用逗号隔开每组 background 的缩写值；
> 2. 如果有 size 值，需要紧跟 position 并且用 "/" 隔开；
> 3. 如果有多个背景图片，而其他属性只有一个（例如 background-repeat 只有一个），表明所有背景图片应用该属性值。
> 4. `background-color` 只能设置**一个**。


## 第六章 CSS3选择器(上)

### 6.1 属性选择器

在HTML中，通过各种各样的属性可以给元素增加很多附加的信息。例如，通过id属性可以将不同div元素进行区分。

在CSS2中引入了一些属性选择器，而CSS3在CSS2的基础上对属性选择器进行了扩展，新增了3个属性选择器，使得属性选择器有了通配符的概念，这三个属性选择器与CSS2的属性选择器共同构成了CSS功能强大的属性选择器。如下表所示：

| 属性选择器 | 功能描述 |
|----------|---------|
| E[att^="val"] | 选择匹配元素E，且E元素定义了属性`att`，其属性值以`val`开头的任何字符串 |
| E[att$="val"] | 选择匹配元素E，且E元素定义了属性`att`，其属性值以`val`结尾的任何字符串 |
| E[att*="val"] | 选择匹配元素E，且E元素定义了属性`att`，其属性值任意位置包含了`val`，换句话说，这符串与属性中的任何位置相匹配|

### 6.2 结构性伪类选择器 —— root

`:root`选择器，从字面上我们就可以很清楚的理解是**根选择器**，他的意思就是匹配元素E所在文档的根元素。在HTML文档中，根元素始终是`<html>`。

推荐使用`:root`代替`html`标签进行样式的定义。

### 6.3 结构性伪类选择器 —— not

`:not`选择器称为**否定选择器**，和jQuery中的`:not`选择器一模一样，**可以选择除某个元素之外的所有元素**。就拿form元素来说，比如说你想给表单中除submit按钮之外的input元素添加红色边框，CSS代码可以写成：

```css
form {
	width: 200px;
	margin: 20px auto;
}
div {
	margin-bottom: 20px;
}
input:not([type="submit"]){
	border: 1px solid red;
}
```

相关的html代码：

```html
<form action="#">
  	<div>
    	<label for="name">Text Input:</label>
    	<input type="text" name="name" id="name" placeholder="John Smith" />
  	</div>
  	<div>
    	<label for="name">Password Input:</label>
    	<input type="text" name="name" id="name" placeholder="John Smith" />
  	</div>
  	<div>
    	<input type="submit" value="Submit" />
  	</div>
</form>
```

效果为：

![not](./not.png)

### 6.4 结构性伪类选择器 —— empty

`:empty`选择器表示的就是空。用来选择没有任何内容的元素，这里没有内容指的是一点内容都没有，**哪怕是一个空格**。

示例：

你的文档中有三个段落p元素，你想把没有任何内容的P元素隐藏起来。我们就可以使用`:empty`选择器来控制。

html代码：

```html
<p>我是一个段落</p>
<p> </p>
<p></p>​
```

css代码：

```css
p{
 	background: orange;
 	min-height: 30px;
}
p:empty {
  	display: none;
}​
```

效果为：

![empty](./empty.png)

### 6.5 结构性伪类选择器 —— target

`:target`选择器称为目标选择器，用来匹配文档(页面)的**url的某个标志符的目标元素**。我们先来上个例子，然后再做分析。

示例：

点击链接显示隐藏段落

html代码：

```html
<h2><a href="#brand">Brand</a></h2>
<div class="menuSection" id="brand">
	content for Brand
</div>
```

css代码：

```css
.menuSection{
  	display: none;
}
:target{	/*这里的:target就是指id="brand"的div对象*/
  	display:block;
}
```

结果为：

![target](./target.jpg)

分析：

* 具体来说，触发元素的URL中的标志符通常会包含一个#号，后面带有一个标志符名称，上面代码中是：`#brand`
* `:target`就是用来匹配`id`为`brand`的元素（`id="brand"`的元素）,上面代码中是那个div元素。

多个URL（多个target）处理：

就像上面的例子，`#brand`与后面的`id="brand"`是对应的，当同一个页面上有很多的url的时候你可以取不同的名字，只要#号后对的名称与`id=""`中的名称对应就可以了.

示例：

html代码：

```html
<h2><a href="#brand">Brand</a></h2>
<div class="menuSection" id="brand">
  	content for Brand
</div>
<h2><a href="#jake">Brand</a></h2>
<div class="menuSection" id="jake">
 	content for jake
</div>
<h2><a href="#aron">Brand</a></h2>
<div class="menuSection" id="aron">
	content for aron
</div>
```

css代码：

```css
#brand:target {
  	background: orange;
  	color: #fff;
}
#jake:target {
  	background: blue;
  	color: #fff;
}
#aron:target {
  	background: red;
  	color: #fff;
}
```

### 6.6 结构性伪类选择器 —— first-child

`:first-child`选择器表示的是选择父元素的第一个子元素的元素E。简单点理解就是选择元素中的`第一个子元素`，记住是子元素，而不是后代元素

示例：

通过`:first-child`选择器定位列表中的第一个列表项，并将序列号颜色变为红色。

html代码：

```html
<ol>
  	<li><a href="##">Link1</a></li>
  	<li><a href="##">Link2</a></li>
  	<li><a href="##">link3</a></li>
</ol>
```

css代码：

```css
ol > li{
  	font-size:20px;
  	font-weight: bold;
  	margin-bottom: 10px;
}

ol a {
  	font-size: 16px;
  	font-weight: normal;
}

ol > li:first-child{
  	color: red;
}
```

效果为：

![first-child](./first-child.png)

### 6.7 结构性伪类选择器 —— last-child

`:last-child`选择器与`:first-child`选择器作用类似，不同的是`:last-child`选择器选择的是元素的最后一个子元素。

示例：

在博客的排版中，每个段落都有`15px`的`margin-bottom`，假设不想让博客`post`中最后一个段落不需要底部的`margin`值，可以使用`:last-child`选择器。

html代码：

```html
<div class="post">
  	<p>第一段落</p>
  	<p>第二段落</p>
  	<p>第三段落</p>
  	<p>第四段落</p>
  	<p>第五段落</p>
</div>​
```

css代码：

```css
.post {
  	padding: 10px;
  	border: 1px solid #ccc;
  	width: 200px;
  	margin: 20px auto;
}
.post p {
  	margin:0 0 15px 0;
}

.post p:last-child {
  	margin-bottom:0;
}
```

效果为：

![last-child](./last-child.png)

### 6.8 结构性伪类选择器 —— nth-child(n)

`:nth-child(n)`选择器用来定位某个父元素的一个或多个特定的子元素。其中`n`是其参数，而且可以是整数值(1,2,3,4)，也可以是表达式(2n+1、-n+5)和关键词(odd(奇数)、even（偶数）)，但参数n的起始值始终是1，而不是0。也就是说，参数n的值为0时，选择器将选择不到任何匹配的元素。

> **经验与技巧** &nbsp; &nbsp;当`:nth-child(n)`选择器中的`n`为一个表达式时，其中`n`是从`0`开始计算，当表达式的值为0或小于0的时候，不选择任何匹配的元素。

示例：

通过`:nth-child(n)`选择器，并且参数使用表达式`2n`，将偶数行列表背景色设置为橙色。

html代码：

```html
<ol>
  	<li>item1</li>
  	<li>item2</li>
  	<li>item3</li>
  	<li>item4</li>
  	<li>item5</li>
  	<li>item6</li>
  	<li>item7</li>
  	<li>item8</li>
  	<li>item9</li>
  	<li>item10</li>
</ol>​
```

css代码：

```css
ol > li:nth-child(2n){
  	background: orange;
}
```

效果为：

![nth-child(n)](./nth-child(n).png)

### 6.9 结构性伪类选择器 —— nth-last-child(n)

`:nth-last-child(n)`选择器和前面的`:nth-child(n)`选择器非常的相似，只是这里多了一个`last`，所起的作用和`:nth-child(n)`选择器有所区别，从某父元素的最后一个子元素开始计算，来选择特定的元素。

示例：

选择列表中倒数第五个列表项，将其背景设置为橙色。

html 代码：

```html
<ol>
  	<li>item1</li>
  	<li>item2</li>
  	<li>item3</li>
  	<li>item4</li>
  	<li>item5</li>
  	<li>item6</li>
  	<li>item7</li>
  	<li>item8</li>
  	<li>item9</li>
  	<li>item10</li>
  	<li>item11</li>
  	<li>item12</li>
  	<li>item13</li>
  	<li>item14</li>
  	<li>item15</li>
</ol>​
```

css代码：

```css
ol > li:nth-last-child(5){
  	background: orange;
}
```

效果为：

![nth-last-child()](./nth-last-child().png)

### 6.10 first-of-type选择器

`:first-of-type`选择器类似于`:first-child`选择器，不同之处就是指定了元素的类型,其主要用来定位一个父元素下的某个类型的第一个子元素。

示例：

通过`:first-of-type`选择器，定位div容器中的第一个p元素（p不一定是容器中的第一个子元素），并设置其背景色为橙色。

html代码：

```html
<div class="wrapper">
  	<div>我是一个块元素，我是.wrapper的第一个子元素</div>
  	<p>我是一个段落元素，我是不是.wrapper的第一个子元素，但是他的第一个段落元素</p>
  	<p>我是一个段落元素</p>
  	<div>我是一个块元素</div>
</div>
```

css代码：

```css
.wrapper {
  	width: 500px;
  	margin: 20px auto;
  	padding: 10px;
  	border: 1px solid #ccc;
  	color: #fff;
}
.wrapper > div {
  	background: green;
}
.wrapper > p {
  	background: blue;
}
/* 我要改变第一个段落的背景为橙色 */
.wrapper > p:first-of-type {
  	background: orange;
}
```

效果为：

![first-of-type](first-of-type.png)

### 6.11 nth-of-type(n)选择器

`:nth-of-type(n)`选择器和`:nth-child(n)`选择器非常类似，不同的是它只计算父元素中指定的某种类型的子元素。当某个元素中的子元素不单单是同一种类型的子元素时，使用`:nth-of-type(n)`选择器来定位于父元素中某种类型的子元素是非常方便和有用的。在`:nth-of-type(n)`选择器中的`n`和`:nth-child(n)`选择器中的`n`参数也一样，可以是具体的整数，也可以是表达式，还可以是关键词。

示例：

通过`:nth-of-type(2n)`选择器，将容器`div.wrapper`中偶数段数的背景设置为橙色。

html代码：

```html
<div class="wrapper">
  	<div>我是一个Div元素</div>
  	<p>我是一个段落元素</p>
  	<div>我是一个Div元素</div>
  	<p>我是一个段落</p>
  	<div>我是一个Div元素</div>
  	<p>我是一个段落</p>
  	<div>我是一个Div元素</div>
  	<p>我是一个段落</p>
  	<div>我是一个Div元素</div>
  	<p>我是一个段落</p>
  	<div>我是一个Div元素</div>
  	<p>我是一个段落</p>
  	<div>我是一个Div元素</div>
  	<p>我是一个段落</p>
  	<div>我是一个Div元素</div>
  	<p>我是一个段落</p>
</div>
```

css代码：

```css
.wrapper > p:nth-of-type(2n){
  	background: orange;
}
```

效果为：

![nth-of-type(n)](./nth-of-type(n).png)

### 6.12 last-of-type 选择器

`:last-of-type`选择器和`:first-of-type`选择器功能是一样的，不同的是他选择是父元素下的某个类型的`最后一个子元素`。

示例：

通过`:last-of-type`选择器，将容器`div.wrapper`中最后一个段落元素背景设置为橙色

html代码：

```html
<div class="wrapper">
	<p>我是第一个段落</p>
	<p>我是第二个段落</p>
	<p>我是第三个段落</p>
	<div>我是第一个Div元素</div>
	<div>我是第二个Div元素</div>
	<div>我是第三个Div元素</div>
</div>
```

css代码

```css
.wrapper > p:last-of-type {
	background: orange;
}
```

效果图：

![last-of-type](./last-of-type.png)

### 6.13 nth-last-of-type(n)选择器

`:nth-last-of-type(n)`选择器和`:nth-of-type(n)`选择器是一样的，选择父元素中指定的某种子元素类型，但它的起始方向是从最后一个子元素开始，而且它的使用方法类似于上节中介绍的`:nth-last-child(n)`选择器一样。

示例：

通过`:nth-last-of-type(n)`选择器将容器`div.wrapper`中的倒数第三个段落背景设置为橙色。

html代码：

```html
<div class="wrapper">
  	<p>我是第一个段落</p>
  	<p>我是第二个段落</p>
  	<p>我是第三个段落</p>
  	<p>我是第四个段落</p>
  	<p>我是第五个段落</p>
  	<div>我是一个Div元素</div>
  	<p>我是第六个段落</p>
  	<p>我是第七个段落</p>
</div>
```

css代码：

```css
.wrapper > p:nth-last-of-type(3) {
	background: orange;
}
```

结果为：

![nth-last-of-type](./nth-last-of-type.png)

### 6.14 only-child 选择器

`:only-child`选择器选择的是父元素中只有一个子元素，而且只有唯一的一个子元素。也就是说，匹配的元素的父元素中仅有一个子元素，而且是一个`唯一的子元素`。

示例：

通过`:only-child`选择器，来控制仅有一个子元素的背景样式，为了更好的理解，我们这个示例通过对比的方式来向大家演示。

html代码：

```html
<div class="post">
  	<p>我是一个段落</p>
  	<p>我是一个段落</p>
</div>
<div class="post">
  	<p>我是一个段落</p>
</div>
```

css代码：

```css
.post p {
  	background: green;
  	color: #fff;
  	padding: 10px;
}
.post p:only-child {
  	background: orange;
}
```

效果为：

![only-child](./only-child.png)

### 6.15 only-of-type 选择器

`:only-of-type`选择器用来选择一个元素是它的父元素的唯一一个相同类型的子元素。这样说或许不太好理解，换一种说法。`:only-of-type`是表示一个元素他有很多个子元素，而其中只有一种类型的子元素是唯一的，使用`:only-of-type`选择器就可以选中这个元素中的唯一一个类型子元素。

示例：

通过`:only-of-type`选择器来修改容器中仅有一个div元素的背景色为橙色。

html 代码：

```html
<div class="wrapper">
  	<p>我是一个段落</p>
  	<p>我是一个段落</p>
  	<p>我是一个段落</p>
  	<div>我是一个Div元素</div>
</div>
<div class="wrapper">
  	<div>我是一个Div</div>
  	<ul>
  		<li>我是一个列表项</li>
  	</ul>
  	<p>我是一个段落</p>
</div>
```

css代码：

```css
.wrapper > div:only-of-type {
	background: orange;
}
```

结果：

![only-of-type](only-of-type.png)

## 第七章 CSS3 选择器(下)

### 7.1 :enabled 选择器

在Web的表单中，有些表单元素有可用（`:enabled`）和不可用（`:disabled`）状态，比如输入框，密码框，复选框等。在默认情况之下，这些表单元素都处在可用状态。那么我们可以通过伪选择器`:enabled`对这些表单元素设置样式。

示例：

通过`:enabled`选择器，修改文本输入框的边框为2像素的红色边框，并设置它的背景为灰色。

html代码：

```html
<form action="#">
  	<div>
    	<label for="name">Text Input:</label>
    	<input type="text" name="name" id="name" placeholder="可用输入框"  />
  	</div>
   <div>
    	<label for="name">Text Input:</label>
    	<input type="text" name="name" id="name" placeholder="禁用输入框"  disabled="disabled" />
  	</div>
</form>
```

css代码：

```css
div{
  	margin: 20px;
}
input[type="text"]:enabled {
  	background: #ccc;
  	border: 2px solid red;
}
```

效果图：

![enabled](enabled.png)

### 7.2 :disabeld 选择器

`:disabled`选择器刚好与`:enabled`选择器相反，用来选择不可用表单元素。要正常使用`:disabled`选择器，需要在表单元素的HTML中设置`disabled`属性。

示例：

通过`:disabled`选择器，给不可用输入框设置明显的样式。

html代码：

```html
<form action="#">
  	<div>
    	<input type="text" name="name" id="name" placeholder="我是可用输入框" />
  	</div>
  	<div>
    	<input type="text" name="name" id="name" placeholder="我是不可用输入框" disabled />
  	</div>
</form>
```

css代码：

```css
form {
  	margin: 50px;
}
div {
  	margin-bottom: 20px;
}
input {
  	background: #fff;
  	padding: 10px;
  	border: 1px solid orange;
  	border-radius: 3px;
}
input[type="text"]:disabled {
  	background: rgba(0,0,0,.15);
  	border: 1px solid rgba(0,0,0,.15);
  	color: rgba(0,0,0,.15);
}
```

效果为：

![disabled](./disabled.png)

### 7.3 :checked 选择器

在表单元素中，单选按钮和复选按钮都具有选中和未选中状态。（大家都知道，要覆写这两个按钮默认样式比较困难）。在CSS3中，我们可以通过状态选择器`:checked`配合其他标签实现自定义样式。而`:checked`表示的是选中状态。

示例：

通过`:checked`状态来自定义复选框效果

html代码

```html
<form action="#">
  	<div class="wrapper">
    	<div class="box">
      		<input type="checkbox" checked="checked" id="usename" /><span>√</span>
   	 	</div>
    	<lable for="usename">我是选中状态</lable>
  	</div>
  
  	<div class="wrapper">
    	<div class="box">
      		<input type="checkbox"  id="usepwd" /><span>√</span>
    	</div>
    	<label for="usepwd">我是未选中状态</label>
  	</div>
</form>
```

css代码：

```css
form {
  	border: 1px solid #ccc;
  	padding: 20px;
  	width: 300px;
  	margin: 30px auto;
}

.wrapper {
  	margin-bottom: 10px;
}

.box {
  	display: inline-block;
  	width: 20px;
  	height: 20px;
  	margin-right: 10px;
  	position: relative;
  	border: 2px solid orange;
  	vertical-align: middle;
}

.box input {
  	opacity: 0;
  	position: absolute;
  	top:0;
  	left:0;
}

.box span {
  	position: absolute;
  	top: -10px;
  	right: 3px;
  	font-size: 30px;
  	font-weight: bold;
  	font-family: Arial;
 	-webkit-transform: rotate(30deg);
  	transform: rotate(30deg);
  	color: orange;
}

input[type="checkbox"] + span {
  	opacity: 0;
}

input[type="checkbox"]:checked + span {
  	opacity: 1;
}
```

效果为：

![check](./check.png)

### 7.4 ::selection 选择器

`::selection`伪元素是用来匹配`突出显示`的文本(用鼠标选择文本时的文本)。浏览器默认情况下，`用鼠标选择`网页文本是以“深蓝的背景，白色的字体”显示的，效果如下图所示

![selection-pic](./selection-pic.jpg)

有的时候设计要求,不使用上图那种浏览器默认的突出文本效果，需要一个与众不同的效果，此时`::selection`伪元素就非常的实用。不过在Firefox浏览器还需要添加前缀。

示例：

通过`::selection`选择器，将Web中选中的文本背景变成红色，文本变成绿色。

html代码：

```html
<p>“::selection”伪元素是用来匹配突出显示的文本。浏览器默认情况下，选择网站文本是深蓝的背景，白色的字体，</p>
```

```css
::-moz-selection {
  	background: red;
  	color: green;
}
::selection {
  	background: red;
  	color: green;
}
```

效果图为：

![selection](selection.jpg)

### 7.5 :read-only 选择器

`:read-only`伪类选择器用来指定处于只读状态元素的样式。简单点理解就是，元素中设置了`readonly=’readonly’`

示例：

通过`:read-only`选择器来设置地址文本框的样式。

```html
<form action="#">
  	<div>
    	<label for="name">姓名:</label>
    	<input type="text" name="name" id="name" placeholder="大漠" />
  	</div>
  	<div>
    	<label for="address">地址:</label>
    	<input type="text" name="address" id="address" placeholder="中国上海" readonly="readonly" />
  	</div>
</form>
```

```css
form {
  	width: 300px;
  	padding: 10px;
  	border: 1px solid #ccc;
  	margin: 50px auto;
}
form > div {
  	margin-bottom: 10px;
}

input[type="text"]{
  	border: 1px solid orange;
  	padding: 5px;
  	background: #fff;
  	border-radius: 5px;
}

input[type="text"]:-moz-read-only{
  	border-color: #ccc;
}
input[type="text"]:read-only{
  	border-color: #ccc;
}
```

结果为：

![readonly](readonly.png)

### 7.6 :read-write 选择器

`:read-write`选择器刚好与`:read-only`选择器相反，主要用来指定当元素处于`非只读状态`时的样式。

示例：

使用`:read-write`选择器来设置不是只读控件的文本框样式。

```html
<form action="#">
  	<div>
    	<label for="name">姓名:</label>
    	<input type="text" name="name" id="name" placeholder="大漠" />
  	</div>
  	<div>
    	<label for="address">地址:</label>
    	<input type="text" name="address" id="address" placeholder="中国上海" readonly="readonly" />
  	</div>
</form>
```

css代码：

```css
form {
  	width: 300px;
  	padding: 10px;
  	border: 1px solid #ccc;
  	margin: 50px auto;
}
form > div {
  	margin-bottom: 10px;
}

input[type="text"]{
  	border: 1px solid orange;
  	padding: 5px;
  	background: #fff;
  	border-radius: 5px;
}

input[type="text"]:-moz-read-only{
  	border-color: #ccc;
}
input[type="text"]:read-only{
  	border-color: #ccc;
}

input[type="text"]:-moz-read-write{
  	border-color: #f36;
}
input[type="text"]:read-write{
  	border-color: #f36;
}
```

效果为：

![read-write](./read-write.png)

### 7.7 ::before和::after

`::before`和`::after`这两个主要用来给元素的前面或后面插入内容，这两个常和`content`配合使用，使用的场景最多的就是清除浮动。

```css
.clearfix::before,
.clearfix::after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
}
.clearfix:after {
	clear: both;
}
.clearfix {
	zoom: 1;
}
```

## 变形与动画（上）

### 8.1 旋转 rotate()

旋转`rotate()`函数通过指定的角度参数使元素相对原点进行旋转。它主要在二维空间内进行操作，设置一个角度值，用来指定旋转的幅度。如果这个值为正值，元素相对原点中心顺时针旋转；如果这个值为负值，元素相对原点中心逆时针旋转。

示例：

HTML代码：

```html
<div class="wrapper">
	<div></div>
</div>
```

CSS代码：

```css
.wrapper {
	width: 200px;
	height: 200px;
	border: 1px dotted red;
	margin: 100px auto;
}
.wrapper div {
	width: 200px;
	height: 200px;
	background: orange;
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
}
```

结果：

![rotate](./rotate.png)

### 8.2 扭曲 skew()

扭曲`skew()`函数能够让元素倾斜显示。它可以将一个对象以其中心位置围绕着`X轴`和`Y轴`按照一定的角度倾斜。这与`rotate()`函数的旋转不同，`rotate()`函数只是旋转，而不会改变元素的形状。`skew()`函数不会旋转，而只会改变元素的形状。

> **Skew()** 具有三种情况：

1. skew(x,y)使元素在水平和垂直方向同时扭曲（X轴和Y轴同时按一定的角度值进行扭曲变形）；
	
	效果示例：
	
	![skew(x,y)](./skew(x,y).png)
	
2. skewX(x)仅使元素在水平方向扭曲变形（X轴扭曲变形）；

	效果示例：
	
	![skewX(x)](skewX(x).png)
	
3. skewY(y)仅使元素在垂直方向扭曲变形（Y轴扭曲变形）。

	效果示例：
	
	![skewY(y)](skewY(y).png)

示例：

HTML代码：

```html
<div class="wrapper">
	<div>我变成平行四边形</div>
</div>
```

CSS代码

```css
.wrapper {
	width: 300px;
	height: 100px;
	border: 2px dotted red;
	margin: 30px auto;
}
.wrapper div {
	width: 300px;
	height: 100px;
	line-height: 100px;
	text-align: center;
	background: orange;
	-webkit-transform: skew(45deg);
	-moz-transform: skew(45deg);
	transform: skew(45deg);
}
```

结果：

![skew](skew.png)

### 8.3 缩放 scale()

`缩放 scale()函数` 让元素根据中心原点对对象进行缩放。

缩放`scale`具有三种情况：

1. `scale(X,Y)`使元素水平方向和垂直方向同时缩放（也就是`X轴`和`Y轴`同时缩放）

	![scale(x,y)](./scale(x,y).png)
	
	代码示例：
	
	```css
	div:hover {
		-webkit-transform: scale(1.5, 0.5);
		-moz-transform: scale(1.5, 0.5);
		transform: scale(1.5, 0.5);
	}
	```
	
	> 注意：Y是一个可选参数，如果没有设置Y值，则表示X，Y两个方向的缩放倍数是一样的。
	
2. `scaleX(x)`元素仅水平方向缩放（X轴缩放）

	![scale(x)](./scale(x).png)
	
3. `scaleY(y)`元素仅垂直方向缩放（Y轴缩放）

	![scale(y)](./scale(y).png)

HTML代码：

```html
<div class="warpper">
	<div>我将放大1.5倍</div>
</div>
```

CSS代码：

```css
.wrapper {
  width: 200px;
  height: 200px;
  border:2px dashed red;
  margin: 100px auto;
}
.wrapper div {
  width: 200px;
  height: 200px;
  line-height: 200px;
  background: orange;
  text-align: center;
  color: #fff;
}
.wrapper div:hover {
  opacity: .5;
  -webkit-transform: scale(1.5);
  -moz-transform:scale(1.5)
  transform: scale(1.5);
}
```

结果：

![scale](./scale.png)

> **Pay Attention**:
> `scale()`的取值默认的值为1，当值设置为0.01到0.99之间的任何值，作用使一个元素缩小；而任何大于或等于1.01的值，作用是让元素放大。


### 8.4 位移 translate()

`translate()函数`可以将元素向指定的方向移动，类似于`position`中的`relative`。或以简单的理解为，使用`translate()函数`，可以把元素从原来的位置移动，而不影响在`X`、`Y`轴上的任何Web组件。

`translate`我们分为三种情况：

1. `translate(x,y)`水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）

	![translate(x,y)](./translate(x,y).png)

2. `translateX(x)`仅水平方向移动（X轴移动）

	![translateX](./translateX.png)

3. `translateY(Y)`仅垂直方向移动（Y轴移动）

	![translateY](./translateY.png)

实例演示：通过translate()函数将元素向Y轴下方移动50px,X轴右方移动100px。

HTML代码：

```html
<div class="wrapper">
	<div>我向右向下移动</div>
</div>
```

CSS代码：

```css
.wrapper {
  	width: 200px;
  	height: 200px;
  	border: 2px dotted red;
  	margin: 20px auto;
}
.wrapper div {
  	width: 200px;
  	height: 200px;
  	line-height: 200px;
  	text-align: center;
  	background: orange;
  	color: #fff;
  	-webkit-transform: translate(50px,100px);
  	-moz-transform:translate(50px,100px);
  	transform: translate(50px,100px);
}
```

演示结果

![translate](./translate.png)

### 8.5 矩阵 matrix()

`matrix()` 是一个含六个值的`(a,b,c,d,e,f)`变换矩阵，用来指定一个2D变换，相当于直接应用一个`[a b c d e f]`变换矩阵。就是基于水平方向（X轴）和垂直方向（Y轴）重新定位元素,此属性值使用涉及到数学中的矩阵，我在这里只是简单的说一下CSS3中的`transform`有这么一个属性值，如果需要深入了解，需要对数学矩阵有一定的知识。

示例：通过matrix()函数来模拟transform中translate()位移的效果。

HTML代码：

```html
<div class="wrapper">
  	<div></div>
</div>
```

CSS代码：

```css
.wrapper {
  	width: 300px;
  	height: 200px;
  	border: 2px dotted red;
  	margin: 40px auto;
}
.wrapper div {
  	width:300px;
  	height: 200px;
  	background: orange;
  	-webkit-transform: matrix(1,0,0,1,50,50);
  	-moz-transform:matrix(1,0,0,1,50,50);
  	transform: matrix(1,0,0,1,50,50);
}
```

演示结果：

![matrix](./matrix.png)

### 8.6 原点 transform-origin

任何一个元素都有一个中心点，默认情况之下，其中心点是居于元素X轴和Y轴的50%处。如下图所示：

![originCenter](./originCenter.png)

在没有重置`transform-origin`改变元素原点位置的情况下，CSS变形进行的旋转、位移、缩放，扭曲等操作都是以元素自己中心位置进行变形。但很多时候，我们可以通过`transform-origin`来对元素进行原点位置改变，使元素原点不在元素的中心位置，以达到需要的原点位置。
`transform-origin`取值和元素设置背景中的`background-position`取值类似，如下表所示：

![originPosition](./originPosition.png)

示例展示：

通过`transform-origin`改变元素原点到左上角，然后进行顺时旋转45度。

HTML代码：

```html
<div class="wrapper">
  <div>原点在默认位置处</div>
</div>
<div class="wrapper transform-origin">
  <div>原点重置到左上角</div>
</div>
```

CSS代码：

```css
.wrapper {
  	width: 300px;
  	height: 300px;
  	float: left;
  	margin: 100px;
  	border: 2px dotted red;
  	line-height: 300px;
  	text-align: center;
}
.wrapper div {
  	background: orange;
  	-webkit-transform: rotate(45deg);
  	transform: rotate(45deg);
}
.transform-origin div {
  	-webkit-transform-origin: left top;
	transform-origin: left top;
}
```

演示结果：

![origin](./origin.png)

### 8.7 过渡属性 transition-property

早期在Web中要实现动画效果，都是依赖于JavaScript或Flash来完成。但在CSS3中新增加了一个新的模块`transition`，它可以通过一些简单的CSS事件来触发元素的外观变化，让效果显得更加细腻。简单点说，就是通过鼠标的单击、获得焦点，被点击或对元素任何改变中触发，并平滑地以动画效果改变CSS的属性值。

在CSS中创建简单的过渡效果可以从以下几个步骤来实现：

1. 在默认样式中声明元素的初始状态样式；
2. 声明过渡元素最终状态样式，比如悬浮状态；
3. 在默认样式中通过添加过渡函数，添加一些不同的样式。

CSS3的过度`transition`属性是一个复合属性，主要包括以下几个子属性：

* `transition-property`:指定过渡或动态模拟的CSS属性
* `transition-duration`:指定完成过渡所需的时间
* `transition-timing-function`:指定过渡函数
* `transition-delay`:指定开始出现的延迟时间

> `transition-property`属性分析：

`transition-property`用来指定过渡动画的CSS属性名称，而这个过渡属性只有具备一个中点值的属性（需要产生动画的属性）才能具备过渡效果，其对应具有过渡的CSS属性主要有：

![hasTransitionProperty](./hasTransitionProperty.png)

HTML:

```html
<div></div>
```
pr
CSS:

```css
div {
	width: 200px;
  	height: 200px;
  	background-color:red;
  	margin: 20px auto;
  	-webkit-transition: background-color .5s ease .1s;
  	transition: background-color .5s ease .1s;
}
div:hover {
  	background-color: orange;
}
```

演示结果:

鼠标移入:

![propertyMouseOver](./propertyMouseOver.png)

鼠标移出

![propertyMouseOut](./propertyMouseOut.png)

> **特别注意**：当`transition-property`属性设置为`all`时，表示的是所有中点值的属性。

用一个简单的例子来说明这个问题：

假设你的初始状态设置了样式`width`,`height`,`background`,当你在终始状态都改变了这三个属性，那么`all`代表的就是`width`、`height`和`background`。如果你的终始状态只改变了`width`和`height`时，那么`all`代表的就是`width`和`height`。

### 8.8 过渡时间 transition-duration

`transition-duration`属性主要用来设置一个属性过渡到另一个属性所需的时间，也就是从旧属性过渡到新属性花费的时间长度，俗称持续时间。

案例演示：

在鼠标悬停（hover）状态下，让容器从直角慢慢过渡到圆角，并让整个动画持续0.5s。

HTML:

```html
<div></div>
```

CSS:

```css
div {
  	width: 300px;
  	height: 200px;
  	background-color: orange;
  	margin: 20px auto;
  	-webkit-transition-property: -webkit-border-radius;
  	transition-property: border-radius;
  	-webkit-transition-duration: .5s;
  	transition-duration: .5s;
  	-webkit-transition-timing-function: ease-out;
  	transition-timing-function: ease-out;
  	-webkit-transition-delay: .2s;
  	transition-delay: .2s;
}	
div:hover {
  	border-radius: 20px;
}
```

演示结果：

鼠标移入

![duration-mouseover](./duration-mouseover.png)

鼠标移出

![duration-mouseout](./duration-mouseout.png)

### 8.9 过渡函数 transition-timing-function

`transition-timing-function`属性指的是过渡的`缓动函数`。主要用来指定浏览器的过渡速度，以及过渡期间的操作进展情况，其中要包括以下几种函数:

![transition-timing-function](./transition-timing-function.png)

> 案例展示：

在`hover`状态下，让容器从一个正方形慢慢过渡到一个圆形，而整个过渡是先加速再减速，也就是运用`ease-in-out`函数。

HTML代码:

```html
<div></div>
```

CSS代码:

```css
div {
  	width: 200px;
  	height: 200px;
  	background: red;
  	margin: 20px auto;
  	-webkit-transition-property: -webkit-border-radius;
  	transition-property: border-radius;
  	-webkit-transition-duration: .5s;
  	transition-duration: .5s;
  	-webkit-transition-timing-function: ease-in-out;
  	transition-timing-function: ease-in-out;
  	-webkit-transition-delay: .2s;
  	transition-delay: .2s;
}
div:hover {
  	border-radius: 100%;
}
```

> 演示结果

鼠标移入：

![timing-mouseover](./timing-mouseover.png)

鼠标移出：

![timing-mouseout](./timing-mouseout.png)

### 8.10 过渡延迟时间 transition-delay

`transition-delay`属性和`transition-duration`属性极其类似，不同的是`transition-duration`是用来设置过渡动画的持续时间，而`transition-delay`主要用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行。

有时我们想改变两个或者多个css属性的`transition`效果时，只要把几个`transition`的声明串在一起，用逗号`，`隔开，然后各自可以有各自不同的延续时间和其时间的速率变换方式。**但需要值得注意的一点：第一个时间的值为 `transition-duration`，第二个为`transition-delay`。**

例如：`a {transition: background 0.8s ease-in 0.3, color 0.6s ease-out 0.3s}`

> 示例：

通过`transition`属性将一个`200px *200px`的橙色容器，在鼠标悬浮状态时，过渡到一个`300px * 300px`的红色容器。而且整个过渡`0.1s`后触发，并且整个过渡持续`0.28s`。

HTML代码:

```html
<div class="wrapper">
  	<div>鼠标放到我的身上来</div>
</div>
```

CSS代码:

```css
.wrapper {
  	width: 400px;
  	height: 400px;
  	margin: 20px auto;
  	border: 2px dotted red;
}
.wrapper div {
  	width: 200px;
  	height: 200px;
  	background-color: orange;
  	-webkit-transition: all .28s ease-in .1s;
  	transition: all .28s ease-in .1s;
}
.wrapper div:hover {
  	width: 300px;
  	height: 300px;
  	background-color: red;
}
```

> 演示结果

鼠标移入：

![delay-mouseover](./delay-mouseover.png)

鼠标移出：

![delay-mouseout](./delay-mouseout.png)

## 变形与动画（下）

### 9.1 初识 Keyframes

`Keyframes`被称为关键帧，其类似于`Flash`中的关键帧。在CSS3中其主要以`@keyframes`开头，后面紧跟着是动画名称加上一对花括号`{…}`，括号中就是一些不同时间段样式规则。

```css
@keyframes changecolor{
  	0%{
   		background: red;
  	}
  	100%{
    	background: green;
  	}
}
```

在一个`@keyframes`中的样式规则可以由多个百分比构成的，如在`0%`到`100%`之间创建更多个百分比，分别给每个百分比中给需要有动画效果的元素加上不同的样式，从而达到一种在不断变化的效果。

> **经验与技巧**：

在`@keyframes`中定义动画名称时，其中`0%`和`100%`还可以使用关键词`from`和`to`来代表，其中`0%`对应的是`from`，`100%`对应的是`to`。

> 浏览器的支持情况：

![keyframes-support](./keyframes-support.jpg)

`Chrome` 和 `Safari` 需要前缀 `-webkit-`；`Foxfire` 需要前缀 `-moz-`。

> 案例演示

通过`@keyframes`声明一个名叫`wobble`的动画，从`0%`开始到`100%`结束，同时还经历了一个`40%`和`60%`两个过程。`wobble`动画在`0%`时元素定位到`left`为`100px`，背景色为`green`，然后在`40%`时元素过渡到`left`为`150px`,背景色为`orange`,接着在`60%`时元素过渡到`left`为`75px`，背景色为`blue`，最后`100%`时结束动画，元素又回到起点`left`为`100px`处，背景色变为`red`。

HTML:

```html
<div>鼠标放到我身上</div>
```

CSS:

```css
@keyframes wobble {
  	0% {
    	margin-left: 100px;
    	background:green;
  	}
  	40% {
    	margin-left:150px;
    	background:orange;
  	}
  	60% {
    	margin-left: 75px;
    	background: blue;
  	}
  	100% {
    	margin-left: 100px;
    	background: red;
  	}
}
div {
  	width: 100px;
  	height: 100px;
  	background:red;
  	color: #fff;
}
div:hover{
  	animation: wobble 5s ease .1s;
}
```

### 9.2 调用动画

`animation-name`属性主要是用来调用 `@keyframes` 定义好的动画。需要特别注意: `animation-name` 调用的动画名需要和`@keyframes`定义的动画名称完全一致（区分大小写），如果不一致将不具有任何动画效果。

> 语法：

```css
animation-name: none | IDENT[,none|DENT]*;
```

1. `IDENT`是由 `@keyframes` 创建的动画名，上面已经讲过了（`animation-name` 调用的动画名需要和`@keyframes`定义的动画名称完全一致）；
2. `none`为默认值，当值为 `none` 时，将没有任何动画效果,这可以用于覆盖任何动画。

> **注意**：

需要在 Chrome 和 Safari 上面的基础上加上`-webkit-`前缀，Firefox加上`-moz-`。

### 9.3 设置动画播放时间 animation-duration

`animation-duration`主要用来设置CSS3动画播放时间，其使用方法和`transition-duration`类似，是用来指定元素播放动画所持续的时间长，也就是完成从`0%`到`100%`一次动画所需时间。单位：`S秒`

> 语法规则

```css
animation-duration: <time>[,<time>]*
```

取值`<time>`为数值，单位为`秒`，其默认值为`0`，这意味着动画周期为`0`，也就是没有动画效果（如果值为负值会被视为`0`）。

> 案例演示：

制作一个矩形变成圆形的动画，整个动画播放时间持续了`10s`钟。

HTML:

```html
<div>Hover Me</div>
```

CSS:

```css
@keyframes toradius{
  	from {
    	border-radius: 0;
  	}
  	to {
    	border-radius: 100%;
  	}
}
div {
  	width: 200px;
  	height: 200px;
  	line-height: 200px;
  	text-align: center;
  	color: #fff;
  	background: green;
  	margin: 20px auto;
}
div:hover {
  	animation-name: toradius;
  	animation-duration: 10s;
  	animation-timing-function: ease-in-out;
  	animation-delay: .1s;
}
```

鼠标移入

![animation-duration-mouseover](./animation-duration-mouseover.png)

鼠标移出

![animation-duration-mouseout](./animaiton-duration-mouseout.png)

### 9.4 设置播放方式 animation-timing-function

`animation-timing-function`属性主要用来设置动画播放方式。主要让元素根据时间的推进来改变属性值的变换速率，简单点说就是动画的播放方式。

> 语法规则：

```css
animation-timing-function:ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) [, ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)]*
```

它和`transition`中的`transition-timing-function`一样，具有以下几种变换方式：`ease`,`ease-in`,`ease-in-out`,`ease-out`,`linear`和`cubic-bezier`。对应功如下：

![animation-timing-function](./animation-timing-function.png)

### 9.5 设置动画开始播放时间 animation-delay

`animation-delay`属性用来定义动画开始播放的时间，用来触发动画播放的时间点。和`transition-delay`属性一样，用于定义在浏览器开始执行动画之前等待的时间。

> 语法规则：

```css
animation-delay:<time>[,<time>]*
```

> 案例演示：    

浏览器渲染样式之后2S之后触发move动画。

HTML:

```html
<div><span></span></div>
```

CSS:

```css
@keyframes move {
  	0%{
    	transform: translate(0);
  	}
  	15%{
    	transform: translate(100px,180px);
  	}
  	30%{
    	transform: translate(150px,0);
  	}
  	45%{
    	transform: translate(250px,180px);
  	}
  	60%{
    	transform:translate(300px,0);
  	}
  	75%{
    	transform: translate(450px,180px);
  	}
  	100%{
    	transfrom: translate(480px,0);
  	}
}
div {
  	width: 500px;
  	height: 200px;
  	border: 1px solid red;
  	margin: 20px auto;
}
div span {
  	display: inline-block;
  	width: 20px;
  	height: 20px;
  	background: green;
  	border-radius: 100%;
  	animation-name:move;
  	animation-duration: 10s;
  	animation-timing-function:ease;
  	animation-delay:2s;
  	animation-iteration-count:infinite;
}
```

> 效果：

![animation-delay](animation-delay.gif)

### 9.6 设置动画播放次数 animation-iteration-count

animation-iteration-count属性主要用来定义动画的播放次数。

> 语法规则：

```css
animation-iteration-count: infinite | <number> [, infinite | <number>]*
```

1. 其值通常为整数，但也可以使用带有小数的数字，其默认值为1，这意味着动画将从开始到结束只播放一次。
2. 如果取值为infinite，动画将会无限次的播放。

> 举例：

通过animation-iteration-count属性让动画move只播放5次，代码设置为：

```css
animation-iteration-count:5;
```

> 注意：

Chrome或Safari浏览器，需要加入`-webkit-`前缀！

### 9.7 设置动画播放方向 animation-direction

`animation-direction`属性主要用来设置动画播放方向，其语法规则如下：

```css
animation-direction:normal | alternate [, normal | alternate]*
```

其主要有两个值：`normal`、`alternate`

1. normal是默认值，如果设置为normal时，动画的每次循环都是向前播放；

2. 另一个值是alternate，他的作用是，动画播放在第偶数次向前播放，第奇数次向反方向播放。

> 例如：

通过`animation-direction`属性，将`move`动画播放动画方向设置为`alternate`，代码为：

```css
animation-direction:alternate;
```