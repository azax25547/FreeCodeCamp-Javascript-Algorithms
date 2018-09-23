//First check the out put in which way it returning value
function findElement(arr,func) {
    for(var i = 0 ; i < arr.length; i++){
        console.log(func(arr[i]))
        //checking the all elements in array and return the first element according to return values
        if(func(arr[i]))
           return arr[i];
    }
    }
console.log(findElement([1, 3, 5, 8, 9, 10],
    function(num) 
        {
             return num % 2 === 0;
        }
        ));