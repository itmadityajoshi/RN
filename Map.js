/* Array methods -- The most important Topics in React Native */

/* If you master map(), React Native will become much easier becasuse you'll use it to display lists of data. */


const fruits = ["Apple", "Banana","Cherry","Mango","Pineapple"]

// using for loop to display the above data
// for (let i=0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// now using map function 

fruits.map((fruits) => {
    console.log(fruits);
})



/* How the map works let's breakdown
    fruits --> The array,
    map() --> Goes through every element,
    fruit --> The current element (you can name it anything).


    Many beginners think the map() is used only for printing. That's not true. The real purpose of the map() is to create new array.
*/


const numbers = [1,2,3]

 const double  = numbers.map((num) => {
    return num * 2;
});

console.log(double);