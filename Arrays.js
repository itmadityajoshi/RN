// An array stores multiple values in a single variable.
const fruits= ["Apple","Banana","Orange","Cherry"]

/* Here,
Index 0 --> "Apple",
Index 1 --> "Banana".
Index 2 --> "Orange"  and so on */

// Accessing Elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// adding an Elements

fruits.push("Pineapple")
console.log(fruits);

// Removing the last element 
fruits.pop();
console.log(fruits);

// length of array:
console.log("Length of array is : " + fruits.length);