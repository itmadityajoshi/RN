// A function is a resuable block of code that perfoms a specific task.

function greet(){
    console.log('Hello!')
}

greet()


/*  Here,
    function -> keyword to create a function.
    greet -> function name.
    ()-> paranthesis can hold parameters
    {}-> Function body
    greet()-> calls (executes) the functions

*/


// function with parameters

function greetOne(name){
    console.log("Hello "  + name);
}

greetOne("Mausam");
greetOne("Chaudhary")

//  Here, Mausam is called an argument and name is a parameter.


// Function with return 

function add(a,b){
    return a+b;
}

const result = add(10,20)
console.log(result);

/*  cosnole.log() prints value. 
    return sends a value back to where the function was called.
*/

// Lesson 5 
/*  Arrow function are a shorter way to write a functions.
They are used everywhere in React and React-Native. */

const greetName = (name) => {
    return ("Hello " + name + ".")
};

console.log(greetName("pukar"));

// if there is only one line, you can omit the {} and return: 
const greeFirst = (name) => "Hello " + name;
console.log(greeFirst("Hari"));


/* Objects are one of the most important topics in Javascripts. In React native, you'll use them constatnlty for propos,state, API responses, navigation parameters, and more. */

// what is an object?
//  Aan object stores data in key value pairs.

const student ={
    nam : "Mausam",
    age: 25,
    country : "Nepal",
}
/* Here nam,age, country are keys and "Mausam","Nepal", 25 are keys */


// Accessing an object Properties
console.log(student.nam);
console.log(student.age);

student.University = "JKU"
console.log(student);