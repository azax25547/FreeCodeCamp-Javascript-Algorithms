function longest (str) {
    //First of all convert the string into an array
    var arr = str.split(" ");
    //then return the length of each words as array
    var arrLen = arr.map(item => item.length);
    //using built in Math.max.apply we can get the largest number
    var big = Math.max.apply(null,arrLen); 
    return big;
}

console.log(longest("The quick brown fox jumped"));