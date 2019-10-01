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

let dollarsAnHour = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
let yearlyPay = dollarsAnHour * 2000;
console.log(yearlyPay);

//PTO
let paychecks = 26;
let hoursPerCheck = 5;
let PTOperYearInHours = paychecks * hoursPerCheck;
console.log('You earn this many hours per year to take a vacay:', PTOperYearInHours/8);

// let p = 26;
// let h = 3;
// let phy = p * h;
// console.log('You earn this many days per year to take a vacay: ',phy);

var supercalifragilisticexpialidocious;




let hrsPerPayCheck = 3;
let weeksThisYear = 9 * 4;
let PTOtoDate = hrsPerPayCheck * (weeksThisYear/2);
let PTOtakenToDate = 32;
let remainderPTOtoDate = PTOtoDate - PTOtakenToDate;
 debugger;
console.log("you have used " + PTOtakenToDate + " hours this year");
console.log("You have " + remainderPTOtoDate + " hours left, which is " + remainderPTOtoDate/8 + " days or " + remainderPTOtoDate/40 + " weeks. Thank you.");



// psuedo code for investment calculator
/*
SET VAR money; // var money;
SET VAR moneyAmount; // var moneyAmount;
SET VAR moneyType; // var moneyType;
SET VAR amount = 5 * money; // var ammount = 5 * (money);
SET VAR invest // var invest;
SET VAR investAmount // var investAmount;
SET VAR investType // var investType;
SET FUNCTION math // function
SET FUNCTION button // function
SET VAR outcome // var outcome = (amount/2);
debugger;
SAY outcome;
*/



VRDisplayCapabilities(Infinity);