//Write a Javascript code that use a for loop to print the numbers from 0 to 3 on the console

for(i=0 ; i<=3 ; i++){
    //console.log(i);
}


//Write a Javascript code usingfor loop to print Hello 3 times on the console

for(i=1 ; i<=3 ; i++){
    //console.log(i+" hello");
}


//Print Count=1 to Count=6
for(i=1 ; i<= 6; i++){
    const print = "count= " +i
    //console.log(print);
}


//Print A AA AAA AAAA
let print ='';
for(i=1 ; i<= 6; i++){
     print = print +'A'
    //console.log(print);
}



//Print 1 12 123 and so on
let prints =''
for(i=1 ; i<= 6; i++){
     prints = prints +i;
    //console.log(prints);
}



//Print table of 3

for (i=1 ; i<=10 ; i++){
    let mult =3*i;
    let str = '3*' + i + '=' + mult;
    //console.log(str);
} 


//Task2 
//Using a for loop, display the numbers from 1 to 10. 
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


//task3
//Using a for loop, display Javascript 6 times.
// for (let i =1 ; i <= 6 ; i++){
//     console.log("Javascript")}


    //task4

    //Using a for loop, display the output as shown belowEmployeeId::1EmployeeId::2EmployeeId::3EmployeeId::4

    // for (let i =1 ; i < 6 ; i++){
    //     console.log("Employeeld::" +i)}

    //  1 to 11
    let result ;
    for (let i=1; i<12; i++){
        result = i ** 3;
        //console.log(`number = ${i}, cube  = ${result}`);
    }

///
for (let i=1; i<=10; i++){
    let result = i *10;
    let z=2;

    //console.log(` ${i} ${result} ${result*z}`);
}


///

for (let i=1; i<=8; i++){
    let result = i+10;
    let z=i + 100;
    let x =i +1000;

    //console.log(` ${i} ${result} ${z} ${x}`);
}



 ///
 function printPattern(n) {
    for (let i = 1; i <= n; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += 'X' + j;
      }
      //console.log(row);
    }
  }
  
  // Example usage:
  printPattern(2); // For n = 2
  printPattern(3); // For n = 3
  

///
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
      let row = `A${i}B${i}`;
      //console.log(row);
    }
  }
  
  // Example usage:
  printPattern(2); // For n = 2
  printPattern(3); // For n = 3
  


  ////
  function name(n) {
    for (let i = 1; i <= n; i++) {
     //console.log(i*i);
    }
    
  }

  name(2);
  name (4);


  ///
  function loop(n) {
    
    for (let i = 1; i <= n; i++) {
        let result ='';
        for(let j =1 ; j <=i ; j++){
            result +=`A${j}`;

        }
       // console.log(result); 
  }
 
}

loop(3);
loop(2);
loop(1);





///
function printP(n) {
    for(let i =1; i<=n ; i++){
        let sum =i +(i+1);
    //console.log(`${i}+${i+1}=${sum}`);

    }
    
}

printP(2);
printP(3);


////
// function printPattern(n) {
//     let result = '';
//     for (let i = 1; i <= n; i++) {
//       result += `XY${i}`;
//       if (i < n) {
//         result += `XY`;
//       }
//     }
//     console.log(result);
//   }
  
//   // Example usage:
//   printPattern(3); // For n = 3
//   printPattern(2); // For n = 2
//   printPattern(1); // For n = 1
//   printPattern(4); // For n = 4


const data = 'XY';
let str = "";
function userData(num){
  let dt = num * 2;
  for(let i=1; i<=dt; i++){
      if(i%2!==0){
        str +=data;
      }
      str +=i;
  }
  return str;
}

console.log(userData(3));
  

