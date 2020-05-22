// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The Reason nestedFunction can access the variable internal is due to the fact that, nestedFunction is nested within myFunction it can see out into myFunction and access its variables, in turn having access to the scopes above them.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function sumation(x){

 let counter = x;
 if (x == 1){
   return 1;
 }

  
 counter += sumation(x-1);
 return counter;

}
console.log(sumation(4))