function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var newArr = [...arr1];
  newArr.splice(0,0,...arr2.slice(0,n))
return newArr.concat(arr2.slice(-n));
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);