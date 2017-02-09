/*
var dog = {
	sound : "woof",
	talk : function() {
		console.log(this.sound);
	}
}

var talkFunction = dog.talk;
dog.talk();
let bindFunction = talkFunction.bind(dog); 
bindFunction();
*/

function talk() {
	console.log(this.sound);
}
let dog = {
	speak:talk,
	sound: "woof"
};

// bind function

let talkFunction = talk.bind(dog);
talkFunction();
dog.speak();

let wolf = {
	howl:dog.speak,
	sound:"oooooo"
}
wolf.howl();

var obj = {a : 10,
	fun:printA};
var a =10;
function printA() {
	
	console.log(this.a);
}
printA();

// call()

let obj1 = {
	num:5
}

function addToThis(a) {
	console.log(this.num + a);
}

addToThis.call(obj1,6);

/*
let c =10;
function print() {
	let c = 5;
	console.log(this.c);
}
print();
*/

/*
function check() {
	let a=2;
	if(a) {
		let b = 5;
		
	}
	console.log(b);
}
check();
*/

/*
let str = "sharan";
console.log(str.codePointAt(0));
console.log(String.fromCodePoint(65));
console.log(str.includes("n"));
console.log(str.startsWith("s"));
console.log(str.endsWith("a",5));
*/

/*
let str = `sharan
ram`;
console.log(str);

console.log(`My name is ${str}`);
*/

/*
function details(name,age=23,place="bangalore") {
	console.log(name,age,place);
}
details("sharan");
*/
let arr = [1,2,3,4,5];
function print(first,second,...third) {
	console.log(first,second,third);
	console.log(arguments.length);
}
print(1,2,3,4,5);

console.log(10,...arr);

let movie = {
	title:"tarzan",
	year:1992
} 
let {title:name,year:date} = movie;
console.log(name,date);

let strings = "sharan";
console.log(strings.includes("an"));
console.log(arr.includes(2));