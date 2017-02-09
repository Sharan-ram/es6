// sets provide distinct values,maps are a name value pair

let set = new Set();
set.add(5);
set.add("5");
console.log(set);

let set1 = new Set([1,1,2,2,3,3,4,4,5,5]);
console.log(set1);

let set2 = new Set([1,2,"2",false,0]);
console.log(set2);

console.log(set2.has(false));

// remove a single item
console.log(set2.delete(false));
console.log(set2);

// clear the entire array
set2.clear();
console.log(set2);
console.log(typeof set2);

let set3 = new Set([1,2,3,4,5]);
set3.forEach(function(value) {console.log(value*2)});

// converting a set into an array

let arr = [...set3];   // just use the spread operator
console.log(arr);

let numbers = [1,1,2,2,3,3,4,4,5,5];
function eliminateDuplicates(item) {
	return [...new Set(item)];
}
console.log(eliminateDuplicates(numbers));

// note - sets are not iteratable

let obj = {name:"sharan"}
let setObj = new Set();

setObj.add(obj);
console.log(setObj);

// maps (note-even maps r not iteratable)

let map = new Map();
map.set("name","sharan");
map.set("age",23);

map.set(obj,"details");
console.log(map);

console.log(map.has(obj));
map.delete(obj);
map.clear();
console.log(map.size);
console.log(map);

// using objects in maps
let mapObj = new Map();
mapObj.set(obj,"collection");

// using arrays in maps
let mapArr = new Map([["name","jeevan"],["age",27]]);
console.log(mapArr);

mapArr.forEach((value,key) => console.log(value + ":" + key));
