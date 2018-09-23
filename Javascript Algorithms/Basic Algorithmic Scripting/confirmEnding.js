function confirmEnding(str,target) {
    //first keep the last value to be compared using substring method
    var index = str.substring(str.length-target.length);
    //check both are same or not
    if(index === target) return true;
    return false;
}

confirmEnding("Open sesame","same");