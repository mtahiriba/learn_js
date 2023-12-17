let a = 3;
let b = 10;
// Arithmetic Operators
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (b - a));
console.log("Multiplication: " + a * b);
console.log("Division: " + b / a);
console.log("Modulus: " + (b % a));
console.log("Exponentiation: " + a ** b);
console.log("Increment: ", a++);
console.log("Decrement: ", b--);
console.log("value of a:", a);
console.log("value of b:", b);
console.log("Increment: ", ++a);
console.log("Decrement: ", --b);

// Assignment Operators
let c = 5;
console.log("value of c:", c);
console.log("Addition Assignment: ", (c += 10));
console.log("Subtraction Assignment: ", (c -= 10));
console.log("Multiplication Assignment: ", (c *= 10));
console.log("Division Assignment: ", (c /= 10));
console.log("Modulus Assignment: ", (c %= 10));
console.log("Exponentiation Assignment: ", (c **= 2));

// Comparison Operators
let d = 20;
let e = "20";
let check = false;
console.log("value of d:", d);
console.log("value of e:", e);
console.log("Equal: ", d == e);
console.log("Not Equal: ", d != e);
console.log("Greater Than: ", d > e);
console.log("Less Than: ", d < e);
console.log("Greater Than or Equal: ", d >= e);
console.log("Less Than or Equal: ", d <= e); // condition = operand (d) operator (<=) operand(e)
console.log("Strict Equal: ", d === e);
console.log("Strict Not Equal: ", d !== e);

// Ternary Operator
d == e ? (check = true) : (check = false);
console.log("Ternary Operator: ", check);

// Logical Operators
let f = 10;
let g = 20;
let h = 10;
console.log("value of f:", f);
console.log("value of g:", g);
console.log("value of h:", h);
// Logical AND (&&)  (condition1) && (condition2)
// condition1 = true
// condition2 = true
// condition1 && condition2 = true

// condition1 = true
// condition2 = false
// condition1 && condition2 = false

// condition1 = false
// condition2 = true
// condition1 && condition2 = false

// condition1 = false
// condition2 = false
// condition1 && condition2 = false

// create AND example
console.log("Logical AND: ", f < g && g < h);

// Logical OR (||)  (condition1) || (condition2)

// condition1 = true
// condition2 = true
// condition1 || condition2 = true

// condition1 = true
// condition2 = false
// condition1 || condition2 = true

// condition1 = false
// condition2 = true
// condition1 || condition2 = true

// condition1 = false
// condition2 = false
// condition1 || condition2 = false

// create OR example
console.log("Logical OR: ", f < g || g < h);

// Logical NOT (!)  !(condition1)

// condition1 = true
// !(condition1) = false

// condition1 = false
// !(condition1) = true

// create NOT example
console.log("Logical NOT: ", !(f < g));
console.log("Type: ", typeof f);
