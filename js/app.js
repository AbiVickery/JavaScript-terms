console.log('Hello world!');
var foo;
console.log(foo);
var bar = 'hello'; // data type? <-a string
var boo = "world!"; // string 
var foo2 = 1; // int
var foo3 = []; // array literal
var foo4 = {}; // object literal
var foo5 = true; // bolean true/false
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