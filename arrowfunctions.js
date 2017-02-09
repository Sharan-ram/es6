let add = (value1,value2) => value1 + value2;
console.log(add(5,6));

let printStr = () => console.log("hello");
printStr();

// sorting arrays using arrow functions

let arr = [34,76,12,56,3,90,76,51];
let result = arr.sort((a,b) => a-b);
console.log(result);

// tail call optimization

function factorial(n,p=1) {
	if(n<=1) {
		return n*p;
	}
	else {
		p = n * p;
		return factorial(n-1,p);
	}
}
console.log(factorial(5));