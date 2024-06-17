//++++++++++++++++++++++Given a number n. If n is greater than 0, display the message Positive Number otherwise display Not a Positive Number in the console
// let n=-21;
// if (n>0){
//     console.log("positive Number");
// }else{
//     console.log("not a positive number");
// }



//********************** Given a number n. If n is a multiple of 10, display the message Multiple of 10, otherwise display Not a Multiple of 10in the console*/

// let n=26;
// if(n%10=== 0){
//     console.log("multiple of 10");
// }
// else{
//     console.log("not a multiple of 10");
// }



//******Given 2 numbers m and n. If m is greater than n, display Larger in the console. If they are equal display Equal. If m is less than n, display Smalle ********** */

// let m=4;
// let n=4;
//  if(m>n){
//     console.log("Larger");
//  }
//  else if(m<n){
//     console.log("smaller");
//  }

//  else{
//     console.log("Equal");
//  }


/*******Given n, check which of the numbers from 2 to 5 divide n and display it on the console********* */

// function checkDivisors(n) {
//     for (let i = 2; i <= 5; i++) {
//         if (n % i === 0) {
//             //console.log(`${i} divides ${n}`);
//         }
//     }
// }


// let n = 15; 
// checkDivisors(n);


///Using a for loop, printnumbers from 1 to 15 in the console. If the number is divisible by 5, printHello instead of the number.

    // for (i=1; i<=15; i++){
    //     if(i%5===0){
    //     //console.log("Hello");
    //     }
    //     else{
    //         //console.log(i);
    //     }
    //     }


///odd and even


// function displayOddEven(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(`${i}:even`);
//         } else {
//             console.log(`${i}:odd`);
//         }
//     }
// }


// let n1 = 5;
// console.log(`n=${n1}`);
// displayOddEven(n1);



////
// function displayDivisors(n) {
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             console.log(i);
//         }
//     }
// }



// let n1 = 10;
// console.log(`n=${n1}`);
// displayDivisors(n1);



/******************** */

// function sqrPattan(n){
//     for (let i=1; i<n; i++){
//        let result = i * i;

//         if(result % 2 === 0){
//             console.log(`square of  ${i}  = ${result}:even`);
//         }else{
//             console.log(`square of  ${i}  = ${result}:odd`);

//         }
        
//     }
// }
//   sqrPattan(5);  


//++++++++++++ marks in good and average +++++++++++++++++++

// function marks(n) {
    
//         if(n>=75){
//             console.log("good");
//         }
//         else if(n>=50){
//             console.log("Average");
//         }
//         else{
//             console.log("poor");
//         }
    
// }
// marks(45);


//++++++++++++  Grade Marks +++++++++++++++++

// function marks(n) {
    
//     if(n>=90){
//         console.log("Grade A");
//     }
//     else if(n>=75){
//         console.log("Grade B");
//     }
//     else if(n>=50){
//         console.log("Grade C");
//     }
//     else{
//         console.log("Grade D");
//     }

// }
// marks(45);

//++++++++++ pattern Shown +++++++++++++

// function displayPattern(n){
//     for (i=1; i<= n; i++){
//        let line ='';
//        for (let j = 1; j <= i; j++) {
//           if(j%2 ===1){
//             line += 'x';
//           }
//         else{
//             line += 'y'
//         }
//        }
//        console.log(line);
//     }
// }
// displayPattern(4);


//********************** */

// function pattern(n) {
//     let patterns= '';
//     for (let i =0; i<n ; i++){
//         if (i % 3 ===0){
//             patterns +='A';
//         }
//         else if (i %3 ===1) {
//             patterns += 'B'
//         } else {
//             patterns += 'C'
//         }
//     }
//     console.log(patterns);
// }
// pattern(6);



//************************** */

// function generatePattern(n) {
//     let result = ''
//     let letteIndex=0;

//     for(let i=1; i<=n; i++){
//         if (letteIndex === 0){
//             result += 'P';

//         }
//         else if (letteIndex === 1){
//             result += 'Q';
//         }
//         else{
//             result += 'R';
//         }
//         result += i;
//         letteIndex =(letteIndex +1)%3;
//     }
//     return result;
// }
//  console.log(generatePattern(5));



///***************** */

function pattern(n) {
    let result =''
    let currentNumber = 1;
    for (let i = 1; i <=n; i++){
        if (i > 1) {
            result += '#'
        } 
            result += currentNumber
            currentNumber +=2;
      
       
    }
    return result;
}

console.log(pattern(3));




///////////////////////
function generatePattern(n) {
    let result = '';
    
    for (let i = 1; i <= n; i++) {
        if (i > 1) {
            result += (i % 2 === 0) ? '+' : '-';
        }
        result += i;
    }
    
    return result;
}

// Test case
console.log(generatePattern(6));




////////////////
function generatePatternAndValue(n) {
    let result = '';
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        if (i > 1) {
            result += (i % 2 === 0) ? '+' : '-';
        }
        result += i;
        
        if (i % 2 === 0) {
            sum += i;
        } else {
            sum -= i;
        }
    }
    
    result += '=' + sum;
    
    return result;
}

// Test cases
console.log(generatePatternAndValue(6)); 
console.log(generatePatternAndValue(5)); 