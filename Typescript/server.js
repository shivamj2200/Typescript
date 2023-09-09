/**
 * tsc check version typescript
 *
 */
// var a = 'shivam';
// console.log(a);
// export {};
// class Shva {
//   test() {
//     console.log('hi dude');
//   }
// }
// var aq = new Shva();
// aq.test();
/**
 * Types
 *
 */
// let a:string = "helo";
// console.log(a);
// let a: number = 10.1;
// console.warn(a);
// let data = ['shiva', 'e', 'e', 'r', 10];
// data.push(100);
// console.log(data);
/**
 * object
 */
/**
 * union check
 */
// let data: string | number = 'shivam';
// data = 10;
// console.log(data);
/**
 *interface
 */
// interface userType {
//   name: string;
//   age: number;
//   getName: () => string;
// }
// let user: userType = {
//   name: 'shivam',
//   age: 30,
//   getName: function () {
//     return 'jaiswal';
//   },
// };
// console.log(user.getName());
/**
 * function typescript
 */
// // function cal(a: number, b?: number): number {
//   return b ? a + b : a;
// }
// console.log(cal(100, 98));
/**
 * class
 */
// class App {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     console.log(this.name);
//   }
// }
// let obj = new App('shivam');
// console.log(obj.getName());
/**
 * namespace in typescript
 */
// ///<reference path = "./Utils.ts"/>
// namespace UsersUtils {
//   export class Users extends Parent {
//     getName() {
//       return this.name;
//     }
//   }
// }
// let obj = new UsersUtils.Users();
// obj.setName('shiva');
// console.log(obj.getName());
/**
 * module
//  */
// import sLogin from './Student';
// import tLogin from './Teacher';
// let teacher = new tLogin();
// console.log(teacher.data);
// let student = new sLogin();
// console.log(student.data);
/**
 * genaric function
 */
// function User<T>(data: T): T {
//   return data;
// }
// console.log(User('anil'));
/**
 * enum in typescript
 */
// enum Days {
//   mon,
//   tue,
//   wed,
//   thu,
//   fri,
//   sat,
//   sun,
// }
// let whichday: Days;
// whichday = Days.sun;
// console.log(whichday);
/**
 * symbol
 */
// let s1 = Symbol('dq');
// console.log(s1);
// let data = {
//   [s1]: 'Some Data',
// };
// console.log(data[s1]);
