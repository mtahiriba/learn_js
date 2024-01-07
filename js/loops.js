console.log("loops loaded");

/*

*       // i = 1, j = 1
**      // i = 2, j = 1, 2
***     // i = 3, j = 1, 2, 3
****    // i = 4, j = 1, 2, 3, 4
*****   // i = 5, j = 1, 2, 3, 4, 5

*/

function drawTriangle(rows) {
  for(let i=1; i<=rows; i++) {
    let str = ""; 
    for(let j=1; j<=i; j++) {
        str += "*";
    }
    console.log(str);
  }
}
// drawTriangle(15);

/*

*****
****
***
**
*

*/

function drawInvertedTriangle(rows, char = "*") {
    for(let i=rows; i>=1; i--) {
        let str = "";
        for(let j=1; j<=i; j++) {
            str += char;
        }
        console.log(str);
    }
}
// drawInvertedTriangle(5);


/*

*
**
***
****
*****
****
***
**
*

*/

function drawDiamond(rows) {
    drawTriangle(rows);
    drawInvertedTriangle(rows-1);
}

// drawDiamond(10);

/*

   *
  ***
 *****
*******
 *****
  ***
   *
   
*/