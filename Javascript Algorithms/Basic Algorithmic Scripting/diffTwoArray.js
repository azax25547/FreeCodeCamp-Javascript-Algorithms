/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
 * In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
 */
// One Liner Solution
function diffArray(arr1, arr2) {
    let newArray = [];
    newArray = arr1.filter(el => !arr2.includes(el))
        .concat(arr2.filter(el => !arr1.includes(el)))
    return newArray;
}

function diffArrayLong(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i]))
            newArr.push(arr1[i])
    }

    for (let i = 0; i < newArr.length; i++) {
        if (!newArr.includes(arr2[i]))
            newArr.push(arr2[i])
    }

    return newArr;
}

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
