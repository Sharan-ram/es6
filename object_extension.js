function createPerson(name,age) {
	return {
		name,            // no need to mention the property name followed by semicolon
   		age
	}
}

console.log(createPerson("sharan",23));

// shorthand form of writing methods inside an object,no need write the keyword function

var person = {
	name:"jeevan",
	age:26,
	sayHello() {
		console.log("Hi " + this.name);
	}
}

person.sayHello();

var human = {};
firstName = "firstName"
lastName = "lastName";
human["firstName"] = "sharan";
human[lastName] = "ram";

console.log(human[firstName]);
console.log(human[lastName]);

firstname = "firstname";
lastname = "lastname";
let person1 = {
	[firstname] : "sharan",        // using [] notation as a property name
	[lastname]: "ram"
}
console.log(person1[firstname]);
console.log(person1.firstname);

suffix = " name";
let person2 = {
	["first" + suffix] : "jeevan",
	"last name": "ramalingam"
}
console.log(person2["first name"]);
console.log(person2["last name"]);

// Object.is property
/*
behaves like '===' for most cases except few cases where there is ambiguity
*/
console.log(Object.is(5,5));     // true
console.log(Object.is(5,"5"));    // false
console.log(Object.is(NaN,NaN));  // true
console.log(Object.is([],[]));    // false

let person3 = {
	name:"saras",
	age:50
}
console.log(Object.keys(person3));

// mixin - copies the keys of one object to another
let person4 = {};
function mixin(receiver,supplier) {
	Object.keys(supplier).forEach(function(key) {
		receiver[key] = supplier[key];
	})
	return receiver
}
console.log(mixin(person4,person3));

console.log(person4["name"]);


// Object.assign() property
let person5 = {};
console.log(Object.assign(person5,person4,person2)); 
console.log(person4);     // acts like the mixin() function,assigns all the property from one object to
console.log(person3);	  // another
console.log(Object.getOwnPropertyNames(person5));


// setting the prototype
// Object.setPrototypeOf(obj1,obj2); 
let person6 = {};
Object.setPrototypeOf(person6,person5);
console.log(person6.name);

person5.sayHello = function() {
	console.log("Hello");
}
console.log(person6.sayHello());

console.log(Object.getPrototypeOf(person6));

// super - gets the prototype of the mentioned object
let dog = {
	getGreeting() {
		return "woof";
	}
};

let friend = {
	getGreeting() {
		return "hi";
	}
};


let me = {
	getGreeting() {
		return super.getGreeting();
	}
};

Object.setPrototypeOf(me,friend);
console.log(me.getGreeting());

Object.setPrototypeOf(me,dog);
console.log(me.getGreeting());