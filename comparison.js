let obj1 = {
    name: "Person 1",
    age: 5,
    };
  
  let obj2 = {
    age: 5,
    name: "Person 1",
   
  };
  
  function areObjectsEqual(obj1, obj2) {
    return JSON.stringify(obj1, Object.keys(obj1).sort()) === JSON.stringify(obj2, Object.keys(obj2).sort());
  }
  
  console.log(areObjectsEqual(obj1, obj2)); 
  