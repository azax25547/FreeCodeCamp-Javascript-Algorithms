function largestOfFour(arr) {
    //First create an empty array to push the largest numbers to them
    var largeArr = [];
    //now loop through each array, find the largest and then push it to largeArr
    for(var arrr of arr){
        largeArr.push(Math.max.apply(null,arrr))
    }
    return largeArr;
    
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);