function truncate(str,lim) {
    //get the length of the input string
    var len = str.length;
    //check if it exceeds the limit or not
    if(len > lim){
        var newWord = str.substring(lim,-1)+"...";
        return newWord;
    } return str;
    
}

console.log(truncate("A-", 1))