// codePointAt()
var str = "sharan";
console.log(str.codePointAt(0));

// String.fromCodePoint
console.log(String.fromCodePoint(1233));


// trim()
console.log("hello \n    ".trim());

// includes()
var str1  = "Hello world";
console.log(str1.includes("e"));

// startsWith()
console.log(str1.startsWith("Hello"));

// endsWith()
console.log(str1.endsWith("world")); // the match starts from str1.length - the 2nd argument

console.log(str1.includes("w",6));

console.log(str1.startsWith(" ",5));

console.log(str1.endsWith("d",str1.length));

// repeat()

console.log(str1.repeat(2));

// template literal
console.log(`hello
world`);

// substitute

let ln = "ram";
console.log(`hello sharan ${ln}`);

// using substitute in calculations
let a = 5;
let price = 2.5;
let message = `${a} costs ${a * price.toFixed(2)} rupees`;
console.log(message);

// console.log(`${a} is ${price}`);





