console.log('Hello world!');
var foo;
console.log(foo);
var bar = 'hello'; // data type? <-a string
var boo = "world!"; // string 
var foo2 = 1; // int
var foo3 = []; // array literal
var foo4 = {}; // object literal
var foo5 = true; // bolean true/false
// page 69
// Don't use a reserved keywrod ie break, return, boolean
// Don't start with a number ie var 9lives
// Variables are case sensitive ie FOO !== foo
// You can start with an underscore, most use an underscore to indicate a private variable

// let const
let bar2 = 'hola';
let bar3 = 1;

const bar4 = 'mundo';
const bar5 = 6;

bar = 'fool';
bar2 = 'yo';
// bar4 = 'broken'; can't redeclare a CONST
console.log('message:', bar, bar2);

/*
multiline comment in javascript 
so you can write more lines
which makes it easier
*/

// single line comment
/* multiline 
comment */


let baz = 'Hello y\all'; // escaping the character
let baz2 = "Hello y'all"; // wrap with the opposite uote
let baz3 = 'Hello "you guys"'; // wrap with the opposite quote

// page 67
let baz4 = 'foo';

let baz5, baz6, baz7;
console.log(baz5); // undefined

baz5 = 'bar';
console.log(baz5); // string bar
baz6 = 'foo';
baz7 = 'bar';

console.log(baz6);


let baz8 = 50, baz9 = 10;
let baz10 = baz8 + baz9; // 15
// let baz10 = 'baz8 + baz9'; // you can not declare the same variable twice

console.log(baz10);

let baz11 = baz10 = baz5;

console.log(baz11, baz10, baz5);

// page 76
// addition "+" / concatenation operator
// subtraction "-"
// multiplication "*"
// division "/"
// increment "++""
// decrement "--"
// modulus "%"

let yo = 'Hello ' + 'World!';
//php $yo = 'Hello ' . 'World!';
console.log(yo);
let i = 2;
i++;
// i--;
let yo2 = i++;
console.log(yo2);

let dollarAnHour = 200;
let yearlyPay = dollarsAnHour * 2000;
console.log(yearlyPay);