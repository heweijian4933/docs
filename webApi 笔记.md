# WebApis

> webapi是浏览器提供的一套用于操作浏览器功能，以及页面和页面元素的接口（**包括 DOM和 BOM**）
> 而 DOM又是 W3C 组织提供的一套关于 html和 xml 的标准化接口，通过这些 DOM 接口可以改变网页的内容、结构和样式

getElementById
getElementsByTagName --获取到的是集合
getElementsByClassName --获取到的是集合

事件三要素
> 事件源，事件类型，事件处理程序（函数）

获取特殊元素（body，html）
```
document.body // 返回 body 对象

document.documentElement //返回 html 对象
```
```
//常见的鼠标事件
onclick     //点击
onmouseover //鼠标经过，over; 在鼠标指针位于一个元素外部，然后用户将其首次移入另一个元素边界之内时触发。
onmouseout  //鼠标离开，out; 
//在鼠标指针位于一个元素上方，然后用户将其移入另一个元素时触发。又移入的另一个元素可能位于前一个元素的外部，也可能是该元素的子元素。

onmouseenter    //在鼠标光标从元素外部首次移动到元素范围之内时触发，这个事件不冒泡。
onmouseleave    //在位于元素上方的鼠标光标移动到元素范围之外时触发，这个事件不冒泡。

onfocus     //鼠标指针焦点聚焦的时候触发
onblur      //鼠标指针焦点失去的时候触发
onmousemove //鼠标移动的时候触发
onmouseup   //鼠标弹起的时候触发
onmousedown //鼠标按下的时候触发

/*
mouseenter和mouseleave只有离开该元素时才会触发，如果有子元素的话，鼠标移入子元素，还算是在该元素中，所以不会触发；
mouseover和mouseout是只要有进入和离开就会出触发，无论是从父元素到子元素还是子元素到父元素，或者是只对父元素进行操作（换句话说，会触发mouseenter和mouseleave的时候一定会触发mouseover和mouseout）
*/

```

// innerText 和 innerHTML的区别 （**HTML是大写的**）
// 1. innerText 不识别html标签 非标准  去除空格和换行
// 2. innerHTML 识别html标签 W3C标准 保留空格和换行的
 // 这两个属性是可读写的  可以获取元素里面的内容, 也可以对元素的该属性直接进行赋值

```
//一个简单的处理程序
function getDate() {
    var date = new Date();
    // 我们写一个 2019年 5月 1日 星期三
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']; 
    var day = date.getDay();
    var hour = date.getHours();
    return '今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day];
}
```

```
input.innerHTML = '点击了';  这个是 普通盒子 比如 div 标签里面的内容
// 表单里面的值 文字内容是通过 value 来修改的
input.value = '被点击了';
// 如果想要某个表单被禁用 不能再点击 disabled  我们想要这个按钮 button禁用
// btn.disabled = true;
this.disabled = true;
// this 指向的是事件函数的调用者 btn
```

> this 的指向问题
* 如果在方法内调用（方法也就是一个对象内的函数），那么 this 则指向调用的父级对象(ES5);ES6 出来了箭头函数以后，箭头函数的调用还是被修正,所以会指向最外面的域（window/undefiend），通常在 vue 里面是指向 vue实例化的全局对象。
* 如果在函数内直接调用，