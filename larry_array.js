

function processData(input) {
    //Enter your code here
    var arr = input.split("\n");
    
    var t = Number(arr.shift());
    for(var i=1;i<arr.length;i+=2) {
        var newArr = arr[i].split(" ").map(Number);
        var sorted = newArr.slice().sort((a,b)=>a-b);
        
        var sumArr = [];
        for(var j=0;j<newArr.length-1;j++) {
            var count=0;
            for(var k=j+1;k<newArr.length;k++) {
                if(newArr[j]>newArr[k]) {
                    count++;
                }
            }
            sumArr.push(count);
        }  
        var res = sumArr.reduce((a,b)=>a+b);
        if(res%2===0) {
            console.log("YES");

        }
        else {
            console.log("NO");
        }
    }
} 

processData(`3
3
3 1 2
4
1 3 4 2
5
1 2 3 5 4`);