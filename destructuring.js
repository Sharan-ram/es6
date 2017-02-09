// object destructuring

let movie = {
	title:"tarzan",
	year:2011
};

let {title,year} = movie;  // if u want to use the same name for variables
console.log(title,year);

let {title:name,year:date,price:budget="10 crores"} = movie;
console.log(name,date,budget);  // tarzan 2011 10 crores

// accessing the non primitive data types using destructuring

let node = {
	name:"foo",
	value:1,
	loc : {
		start: {
			line:1,
			column:1
		},
		end: {
			line:1,
			column:4
		}
	}
}

let {loc: {start,end}} = node;
console.log(start.line,end.line);

// array destructuring

let arr = ["sharan","ram",23];
let [fn,ln,age] = arr;
console.log(fn,ln,age);

// when u want to assign names to the thrid element in the array
let arr1 = ["jeevan","ramalingam",27];
let [ , ,jeevanAge] = arr1;
console.log(jeevanAge);

let arr2 = ["saras","ram",50];
[fn,ln,age] = arr2;
console.log(fn,ln,age);

// swapping values of 2 variables using destructuring
let a = 5,b=1;
[a,b] = [b,a];
console.log(a);  // 1
console.log(b);  // 2

// destructuring nested arrays

let arr3 = ["sharan","jeevan",["saras",50]];
[name1,name2,[name3,age]] = arr3;
console.log(name3,age);

// array destructuring using rest 

[name1,...restArr] = arr3;
console.log(restArr);

[...arr3Copy] = arr3;
console.log(arr3Copy);

// mixed destructuring

let node1 = {
	name:"foo",
	value:1,
	loc : {
		start: {
			line:1,
			column:1
		},
		end: {
			line:1,
			column:4
		}
	},
	range : [0,1]
}

let {loc: {start1,end1},range:[first]} = node1;
console.log(first);

