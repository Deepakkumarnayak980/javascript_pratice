let n = 13;
let remainder =n%2;
if (remainder==1){
    n++
}
//console.log(n);


// ///
// let num =37;
// if(num%6==0){
//     console.log('divisible by 6');
// }
// else if(num%3==0){
//     console.log('divisible by 3');
// }
// else if(num%2==0){
//     console.log('divisible by 2');
// }
// else{
//  console.log('not divisible by 2,3,6');
// }

///////

// let size =9;
// let count=0;

// for(let i =2; i<=size; i++){
//  if (size%2 ==2){
//     console.log('composite');
//  }
//  else{
//     //console.log('prime');
//  }
// }
// //console.log(str);




//////  check the prime num
let num = 6;
let count = 0;

// Loop from 1 to the number
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
}

// Check the number of factors
if (count == 2) { 
    console.log('prime');
} else {
    if (num == 1) {
        console.log('1 is neither prime nor composite');
    } else {
        console.log('composite');
    }
}
