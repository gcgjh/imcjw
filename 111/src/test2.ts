/*********************************************************/
//运算符
// 1. 算术运算符
// + - * / % ++ -- --
// 2. 赋值运算符
// = += -= *= /= %=
// 3. 比较运算符
// == === != !== > < >= <=
// 4. 逻辑运算符
// && || !
// 5. 位运算符
// & | ^ ~ << >> >>>
// 6. 三元运算符
// condition ? expr1 : expr2
/*********************************************************/

// /********************************************************* */
// //比较运算符
// //== 和 === 的区别
// //== 会进行类型转换后再比较
// //=== 不会进行类型转换，只比较值和类型是否相同
// var a = 5;
// var b = 10;
// console.log("a == b:", a == b); // false
// console.log("a==5:", a == 5); // true
// console.log("a === b:", a === b); // false

// //逻辑运算符
// //&& 和 || 的区别
// //&& 短路运算符，如果左边为false，则右边不会被执行
// //|| 短路运算符，如果左边为true，则右边不会被执行
// console.log("a > 3 && b < 15:", a > 3 && b < 15); // true
// console.log("a < 3 && b < 15:", a < 3 && b < 15); // false
// console.log("a < 3 || b < 15:", a < 3 || b < 15); // true
// console.log("a > 3 || b < 9:", !(a > 3 || b < 9)); // false

// //位运算符
// //& | ^ ~ << >> >>>

// //三元运算符
// var csd = a > b ? a : b;

// console.log("cq:", csd); //b
// /*********************************************************/

// /********************************************************* */
// //流程控制
// //1. 条件语句
// //if...else if...else
// //switch...case...default
// //2. 循环语句
// //for...in
// //3.三元运算

// var isvalid = true;
// if (isvalid) {
//     console.log("valid");
// }
// else {
//     console.log("invalid");
// }

// enum Color { red, green, blue };

// function getColorName(c: Color) {
//         var colorName: string;
//     switch (c) {
//         case Color.red:
//         colorName = "red";
//         break;
//     case Color.green:
//         colorName = "green";
//                 break;
//     case Color.blue:
//         colorName = "blue";
//         break;

//     default:
//         colorName = "unknown";
//         break;
//     }
//     return colorName;
// }

// for (var col in Color) {
//     console.log('col value:', col);
// }
// var cal: Color = Color.blue;
// var colname = getColorName(cal);
// console.log('colorname:', colname);

// /*********************************************************/

// var n: number = 3;
// while (n>0) {
//     n--;
//     console.log('n:', n);
// }
// do{
//     n++;
//     console.log('n:', n);
// } while (n < 3);

// //迭代对象属性
// enum Color { red, green, blue };
// for (var col in Color) {
//     console.log('col value:', col);
// }
// const obj = { a: 1, b: 2, c: 3 };
// (Object.keys(obj) as (keyof typeof obj)[]).forEach(key => {
//         console.log(key + '=' + obj[key]);
// });

// //计数器控制循环
// for (var i = 0; i < 3; i++) {

//     console.log('i:', i);

// }

/*********************************************************/
//函数
//函数声明
//具名函数和匿名函数和箭头函数
//具名函数
// function greet(name: string): string {
//     if (name) {
//     return "Hello, " + name;
//     }
//     else {
//         return "Hello";
//     }
// }
// console.log(greet("CJW"));
// console.log(greet(""));

// //匿名函数
// var greetAnon = function cjw(name: string): string {
//     if (name) {
//         return "Hello, " + name;
//     }
//     else {
//         return "Hello";
//     }
// };
// console.log(greetAnon("CJW"));
// console.log(greetAnon(''));
// //console.log(cjw('cjw')); //函数名在函数体外不可见

// //箭头函数
// var greetArrow = (name: string): string => {
//     if (name) {
//         return "Hello, " + name;
//     }
//     else {
//         return "Hello";
//     }
// };
// console.log(greetArrow("CJW"));
// console.log(greetArrow(""));
// /*********************************************************/

// //类
// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(): string {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }
// var person = new Person("CJW", 25);
// console.log(person.greet());
// console.log(person.name);
// for (var prop in person) {
//     console.log(prop);
// }
// /*********************************************************/

// //接口
// interface IAnimal {
    
//     log(arg: any): void;
// }
// class Dog implements IAnimal {
//     log(arg: any): void {
//         console.log("Dog log:", arg);
//     }
// }
// var dog = new Dog();
// dog.log("cjw");

// interface Usermsg{
//     name:string;
//     age:number;
//     gender:string;
// }
// var user:Usermsg={
//     name: "cjw",
//     age: 25,
//     gender: "female"
// };
// for (var key in user) {
//     console.log(key + '=' + user[key as keyof Usermsg]);
// }
