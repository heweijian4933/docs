# 关于 let

let 的设计初衷是为了修正 var的很多缺点

var 问题比较多，var 定义的变量作用于全局，容易导致变量被修改；



**var的变量提升问题举例子**

```javascript
var a = 2;
function fn(){
  
  if(false){
    var a = 2
  }
  console.log(a)
}

fn();
```

详情可以参考掘金大佬的文章[https://juejin.cn/post/6844903607066689550]()

大致的原理解释是因为：

> JS引擎会在正式执行代码之前进行一次类似于”**预编译**“/"**预解析**"的动作，预编译简单理解就是在内存中开辟一些空间，存放一些变量和函数。其中注意的是 变量声明优先于 >函数体声明, 
>
> 预解析机制使得变量提升（Hoisting)，从字面上理解就是变量和函数的声明会移动到**移动到函数或者全局代码的开头位置。我们再来分析一下小栗子加深一下理解。**

先变量声明，再函数声明，之所以函数的声明提升优于变量的声明提升，是因为覆盖的原因



```
console.log(a) // 执行之前，变量提升作为window的属性， 值被设置为undefined
var a = 'hello JS' 

/* JavaScript 仅提升声明，而不提升初始化 */

num = 6;
num++;
var num;
console.log(num) // 变量提升 值为undefined的num赋值为6，再自增 => 7

function hoistFunction() {
    foo();
    function foo() {        
        console.log('running...')    
    }
}
hoistFunction(); // 函数声明提升，可以在函数体之前执行

/* 最后一个栗子 */

alert(a) // 最后的声明为函数声明， 因此a此时为函数体；//a一开始是变量声明，而后被函数声明覆盖
a(); // 执行 a 函数，输出10
var a = 3; // 3 赋给a
function a() {    
    alert(10)
};
alert(a) // 3
a = 6; // 6赋给a，不是一个函数，故下方执行throw error
a(); // throw error

```

