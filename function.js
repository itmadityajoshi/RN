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

