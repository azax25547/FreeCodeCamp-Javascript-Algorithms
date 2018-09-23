var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
function updateRecords(id,prop,value){
    if(value == "" ) {
     console.log(collection);
    }
  else if(collection[id][prop] !== ""){
      if(Array.isArray(collection[id][prop])){
        if(collection[id].hasOwnProperty(prop)){
            collection[id][prop].push(value);
        }
      }else{
        collection[id][prop] = [value];
      }
    }else{
      delete collection[id][prop];
  }
   console.log(collection);
}


updateRecords(2468,"tracks","");

