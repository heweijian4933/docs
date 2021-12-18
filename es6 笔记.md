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

alert(a) // 最后的声明为函数声明， 因此a此时为函数体；//a一开始是变量声明，而后被函数声明覆盖,所以下一步 a作为函数体能够正常执行
a(); // 执行 a 函数，输出10
var a = 3; // 3 赋给a
function a() {    
    alert(10)
};
alert(a) // 3
a = 6; // 6赋给a，不是一个函数，故下方执行throw error
a(); // throw error

```

> 即let和 var 的区别



# 关于const

const产生的基本数据类型变量在作用域内是不可更改的，但是如果产生的变量是引用数据类型，那么给变量的**内部属性**赋值是可行，这种情况下 const 变量可变。

```js
const obj = {name:"张三",age:24}

obj.age = 20;
obj.gender = 'male'
console.log(obj); //{ name: '张三', age: 20, gender: 'male' }
```

> 但是给引用数据类型的变量赋值，是不行的

```
const arr = [];
arr.push(1);
console.log(arr); // [1]

arr = [];//throw error;
```

除了以上这点，const 跟 let 没有什么区别了

# 解构赋值

## 数组解构赋值

```
let [a,b,c] = [1,2,3]
console.log(a,b,c); // 1,2,3 //常规解构赋值
```

```
let [a,[b,c] = [1,[2,3]
console.log(a,b,c); // 1,2,3 //复杂多级结构赋值
```

```
let [a,,c] = [1,2,3]
console.log(a,c); // 1,3 //跳过部分值来赋值
```

```
let [b,...] = [1,2,3]
console.log(b); // 1 //忽略部分不关心的数据来赋值，该用法也经常用来去除数组里面部分不想要的数据(一种思路)
```

```
let [a,b,c='default value',d = 'default value'，e] = [1,2,3]
console.log(a,b,c,d,e); // 1,2,3,'default value',undefined //设置默认值
```

## 对象解构赋值

```
let obj = {a:1,b:2}
let {a,b} = obj
console.log(a,b); //1,2 //常规解构赋值
```

```
let obj = {a:1,b:2}
let {a:A,b} = obj
console.log(a,b,A); //throw error: a is not defined

//但是如果执行
console.log(A,b); // 1,2也就是 a 换了个变量名为 A
```

```
let obj = {a:1,b:2}

let a= 0;
console.log(a); //0

{a,b} = obj; //throw error //这里{}会让 js 以为是语句，所以报错

//如果加一下括号限定一下，那么可以执行
（{a,b} = obj;）
console.log(a); //1 //嘿嘿是不是很神奇吧
```

> 经常用于引入包/代码文件的时候解构包里面的方法方便后续调用

# 新增字符串方法

判断字符串里面是否包含某个字符，ES5 的做法是

```
let str = "Hello World!"
if(str.indexof('a') !== -1){ // -1; indexof,如果找到对应元素，则返回所在的 index(0~n);如果找不到则返回-1；
	//do something
}
```

ES6 新增 includes 方法

```
let str = "Hello World!"
if(str.includes('a')){ //includes 语法语义更加明确，代码也更加简洁
	//do something
}
```

> 同时还有新增startsWith, endsWith, repeat 方法，方法作用同词义



# 模板字符串



# 新的数据类型Symbol

旧的数据类型 undefined， null, Boolean, String, Number, Object...

> 据介绍，最大的作用是防止对象里面的键在不同的作用域内被覆盖
>
> 详情查看本地文件a.js 和 b.js



# Proxy





# Set

> 去除重复元素

```
let arr  = [1,2,3,3]
let s = new Set(arr)
//[1,2,3]

s.add(1)
s.add(4)
//[1,2,3,4] // 已存在的值不会重复增加

s.delete(4)
//[1,2,3]

s.has(3) // true;
s.has(4) // false

s.clear() // Set(0){}
```

