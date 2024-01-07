const str = "It's alright. My name is tahir";
console.log(str);
console.log("String length => ", str.length);

const name = "taha";
const str1 = `It's alright.
My name is "tahir".
Muhammad / ${name}.`;
console.log(str1);
console.log("String length => ", name.length);
// --------------------------------------------------------------------------------------------

const words = str.split(" ");
const char = str.split("");
console.log("words => ", words);
console.log("characters => ", char);

// --------------------------------------------------------------------------------------------

console.log(str[3]);
console.log(char[3]);
console.log(words[3]);

// --------------------------------------------------------------------------------------------
//                          Iterate String
// --------------------------------------------------------------------------------------------

// for keyword
// syntax: for (initialization; condition; increment/decrement) { code to be executed }


const testString = "tahir";  // rihat

// Method 01:
let reverseStr = "";
for (let i = 0; i < testString.length; i++) {
    reverseStr = testString[i] + reverseStr;
}
console.log("reverseStr => ", reverseStr);

// Method 02:
let reverseStr1 = "";
for (let i = testString.length - 1; i >= 0; i--) {   // i = 4
    reverseStr1 += testString[i];
}
console.log("reverseStr1 => ", reverseStr1);

// Method 03:
// const charString = testString.split("");
// console.log("charString => ", charString);
// const reverseCharString = charString.reverse();
// console.log("reverseCharString => ", reverseCharString);
// const reverseStr2 = reverseCharString.join("");
// console.log("reverseStr2 => ", reverseStr2);
const reverseStr2 = testString.split("").reverse().join("");
console.log("reverseStr2 => ", reverseStr2);

/*
    let s = ""
    1. t    s = "t" + ""
    2. a    s = "a" + "t"
    3. h    s = "h" + "at"
    4. i    s = "i" + "hat"
    5. r    s = "r" + "ihat"
*/

// --------------------------------------------------------------------------------------------
//                          String Task
// --------------------------------------------------------------------------------------------

// 1. Write a JavaScript function that finds the number of occurrence in string.
function numberOfOccurrence(str){
    const result = {};
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(char === " ") continue;
        if(result[char] === undefined){
            result[char] = 1;
        } else {
            result[char] += 1;
        }
    }
    return result;
}
// calling function 
console.log(numberOfOccurrence(str)); // {t: 1, a: 2, h: 1, i: 1, r: 1}

// 2. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// Method 01:
function capitalize(str){
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        const charWord = words[i].split("");
        charWord[0] = charWord[0].toUpperCase();
        const word = charWord.join("");
        words[i] = word;
    }
    const result = words.join(" ");
    return result; 
}
// calling function
console.log(capitalize(str1)); // It's Alright. My Name Is Tahir


// Method 02:
function capitalize1(str){
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    const result = words.join(" ");
    return result; 
}
// calling function
console.log(capitalize1(str1)); // It's Alright. My Name Is Tahir


// --------------------------------------------------------------------------------------------