// default parameters

function greeting(name,age=23,place="bangalore") {
	console.log(`Hello,my name is ${name},i am ${age} years old,i'm from ${place}`);

}

greeting("sharan");  



function getVal(value) {
	return ++value;
	
}

/*
function add(first,second=getVal()) {
	console.log(first + second);
}
*/



function multiply(first,second = getVal(first)) {
	console.log(first*second);
}
multiply(1);


/*

function add(first = second,second) {
	console.log(first + second);

}

add(undefined,1);  // will throw an error saying second is not defined

*/

// rest operator

let arr = [1,2,3,4,5];
function print(first,second,...third) {
	console.log(third);
	console.log(arguments.length);
}
print(1,2,3,4,5);

// Function constructor

let add = new Function("first","second=first","return first + second")
console.log(add(1));

// spread operator

let arr1 = [1,2,3,4,5];
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));

let values = [30,45,10];
console.log(Math.min(...values,1));  // returns 1 ,if all elements in the arr r positive

let values1 = [-10,-2,-4];
console.log(Math.max(...values1,0)); // returns 0 ,if all elements in the arr r negative

// choosing appropriate names (name property)
function helloWorld() {
	console.log("hi");
}
console.log(helloWorld.name);

// function constructor

function Person(name) {
	if(this instanceof Person) {        // (instanceof) to check whether a new Object is 
										// created using new keyword	
	this.name=name;
	}
	else {
		console.log("error");
	}
}
let sharan = new Person("sharan");
console.log(sharan.name);

/*
let kiran = Person("kiran");   // this will throwan error
console.log(kiran.name);
*/                                

