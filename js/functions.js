console.log('functions.js loaded');

// arguments
function printName(name){
    name = "Muhammad " + name;
    console.log(name);
}
// parameter
printName("tahir");

// Addition function with arguments
function add(a, b){
    return (a + b);
}
add(2, 5);

// Addition function with default arguments
function addWithDefault(a, b = 0){
    const result = a + b;
    return result;
}
// console.log(addWithDefault(4)); // a + b = 4 + 0 = 4
const sum = addWithDefault(4, 5); // a + b = 4 + 5 = 9
console.log(sum);

// Addition function with default arguments
function addWithDefault1(a = 1, b = 0){
    const result = a + b;
    return result;
}

let a;
console.log(a);
console.log(addWithDefault1(a,5));


// subtraction function
function sub(a, b){
    return (a - b);
}

// multiplication function
function mul(a, b){
    return (a * b);
}

// division function
function div(a, b){
    return (a / b);
}

// calculator function
function calculator(a, b, operator){

    if(operator == "+"){
        return add(a, b);
    }else if(operator == "-"){
        return sub(a, b);
    }else if(operator == "*"){
        return mul(a, b);
    }else if(operator == "/"){
        return div(a, b);
    }else{
        return "Invalid Operator";
    }

    console.log("This line will never execute");

}
console.log("Result of Calculator => ", calculator(2, 3, "+"));
console.log("Result of Calculator => ", calculator(2, 3, "-"));
console.log("Result of Calculator => ", calculator(2, 3, "*"));
console.log("Result of Calculator => ", calculator(2, 3, "/"));
console.log("Result of Calculator => ", calculator(2, 3, "&"));
console.log("Result of Calculator => ", calculator(2, 3, "+"));
console.log("Result of Calculator => ", calculator(2, 3, "+"));
console.log("Result of Calculator => ", calculator(2, 3, "+"));


// --------------------------------------------------------------------------------------------
// ARROW FUNCTIONS
// --------------------------------------------------------------------------------------------

// simple function
function myFunction(){
    console.log("This is my function");
}
myFunction();

// An other way to write a function
const myFunction1 = function(a, b) {
    console.log("This is my function");
}
myFunction1();

// Arrow function
const myFunction2 = (a, b) => "This is my function";
console.log(myFunction2());
