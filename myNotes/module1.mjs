import something, { b, c, d } from './module2.mjs'
// import something, { b1, c, d } from "./module2.mjs"; // error

// for example if we import 'b' as 'b1' then do console.log(b1) we get error as in module2.mjs it is exported as 'b' not 'b1' and it should be imported as 'b' only. By this we understand that it should be imported by the same name with which it was exported.

console.log(something)
console.log(d)
console.log(c)
console.log(b)
// console.log(b1); // clg-> console.log();

// node .\module1.mjs      in terminal to run this code file

// clg-> console.log();