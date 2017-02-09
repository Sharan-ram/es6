// [0, 1, 2, 5, 3, 3, 6]


let arr = [0,1,2,5,3,4,6];
let i = arr.length-1;

while(i>0 && arr[i]<=arr[i-1]) {
	i--;
}

let j=arr.length-1;
while(arr[i-1]>=arr[j]) {
	j--;
}
var temp = arr[i-1];
arr[i-1]=arr[j];
arr[j]=temp;


j = arr.length-1;
while(i<j) {
	temp=arr[i];
	arr[i]=arr[j];
	arr[j]=temp;
	i++;
	j--;
}
console.log(arr);