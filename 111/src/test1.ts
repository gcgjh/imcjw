// var t: number = 1;

// /********************************************************************/
// var count0;//any type
// var count1 = 0;//number type(autotype inference)
// var count2: number;//number type
// var count3: number = 0;//number type
// /********************************************************************/

// /********************************************************************/
// /*基本类型有boolean,number,string,array,void,及用户自定义的enum*/
// //所有类型都是any的子类型
// var isDone: boolean = false;
// var num: number = 6;
// var str1: string = 'hello';
// var str2 :string ="world";
// var list1: number[] = [1, 2, 3];
// var list2: Array<number> = [1, 2, 3];//泛型数组

// function myfunc(): void {
//     console.log("my");
// }
// enum Color { red, green, blue };
// var c: Color =Color.green;
// /********************************************************************/
// myfunc();
// console.log('test.ts');
// var path: string | string[];
// path = "C:\\Users\\shehu\\Desktop\\1111\\111";
// path = ["C:\\Users\\shehu\\Desktop\\1111\\111"];

// var qd: any    = 'cjw';
// if (typeof qd === 'string') {
//     console.log(qd);
// }
// qd.foo();
// qd.cjwshitozhu();

// /************************************************************/
// //类型别名
// type primitiveArray=Array<string|number|boolean>;
// var arr: primitiveArray = [1, 2, 3, "4"];
// type Mynumber = number;
// var mynum: Mynumber = 1;
// type CallBack =()=>void;
// console.log(arr);
// /************************************************************/

// /********************************************************************/
// //环境声明
// interface ICustomconsole {
//     log(msg: string): void;
// }
// declare var Customconsole: ICustomconsole;
// Customconsole.log("hello world");
// /********************************************************************/
