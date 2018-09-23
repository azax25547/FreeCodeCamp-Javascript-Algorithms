// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";

//   // change code below this line
//   const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>, `+`<li class="text-warning">${arr[1]}</li>, `+`<li class="text-warning">${arr[2]}</li>`];
//   // change code above this line

//   return resultDisplayArray;
// }
// /**
//  * makeList(result.failure) should return:
//  * [ <li class="text-warning">no-var</li>,
//  *   <li class="text-warning">var-on-top</li>, 
//  *   <li class="text-warning">linebreak</li> ]
//  **/
// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);

// const btn = document.getElementById("btn");
// btn.addEventListener("click",function(e){
// console.log(e);
// })

// let hello = "   Hello, World!  ";
// let wsRegex = /[^\s+]/; 



// let result = hello.replace(wsRegex,"")
// console.log(result.length);

// const newArr = (m,n) => {
//     newArray = [];
//     row = [];

//     for(let i = 0; i < m; i++){
//         for(let j = 0; j < n; j++){
//             row.push("0");
//         }
//         newArray.push(row);
//         row = [];
//     }
//     return newArray;
// }

// let matrix = newArr(3,2);
// console.log(matrix)
// let val;
// function convertHTML(str) {
//   if(str.match(/(&+)/)){
//      val = str.replace(/(&+)/,'&amp;')
//   }else if(str.match(/(<+)/)){
// val = str.replace(/(<+)/,'&lt;')
//   }else if(str.match(/(>+)/)){
// val = str.replace(/(>+)/,'&gt;')
//   }else if(str.match(/("+)/)){
// val = str.replace(/("+)/,'&quot;')
//   }else if(str.match(/('+)/)){
// val = str.replace(/('+)/,'&apos;')
//   }
//    return val;
// }

// console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // change code below this line
//     newArr.push(arr);
//     // change code above this line
//     num--;
//   }
//   return newArr;
// }

// // change code here to test different cases:
// console.log(copyMachine([true, false, true], 2));
// let myNestedArray = [[true],
// [
//   [2],["lol"]
// ],
// [
//   [
//     ["deep"]
//   ]
// ],
// [
//   [
//     [
//       ["deeper"]
//     ]
//   ]
// ],
// [
//   [
//     [
//       [
//         ["deepest"]
//       ]
//     ]
//   ]
// ]
// ]
// console.log(myNestedArray.length)
// function sumPrimes(num)  {
//   var sum = 0;
//   for (var counter = 2; counter <= num; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//        sum+=counter;
                
//     }
    
// }
// return sum;
// }
// console.log(sumPrimes(977))

// function convertHTML(str) {
//     //Chaining of replace method with different arguments
//       str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
//     return str;
//     }
    
//     // test here
//     convertHTML("Dolce & Gabbana");

// function findElement(arr, func) {
//   let num = 0;
//   for(let i = 0; i < arr.length; i++){
//     num = arr[i];
//     func = function(num){
//       return num % 2 === 0;
//     }
//   }
//   return num;
// }

// const lol = findElement([1, 2, 3, 4], num => num % 2 === 0);
// console.log(lol);
// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
//   // change code below this line  
//   userObj.data.friends.push(friend);
//   return userObj.data.friends
//   // change code above this line
// }

// console.log(addFriend(user, 'Pete'));

// function fearNotLetter(str) {
//     var arr  =[];
//     var sum;
//     for(var i = 0; i< str.length; i++){
//        arr.push(str.charCodeAt(i));
//     }
//     //sum of given array
//     var lul = (arr[0]+arr[arr.length-1])*((arr[arr.length-1]-arr[0])+1)/2;
//     //sum
//     var sum = arr.reduce((a,b) => a+b);
//     var res = lul - sum;
//     if(res === 0){
//       return undefined;
//     }else {
//       return String.fromCharCode(res);
//     }
//     return lul - sum;
//   }
  
//   console.log(fearNotLetter("abc"));

function translatePigLatin(str) {
  for(let i = 0; i< str.length; i++){

    if(!(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") ){
      return str.substring(i);


  }else {
    return str + "way";
  }

  }
  
}

console.log(translatePigLatin("consonant"));