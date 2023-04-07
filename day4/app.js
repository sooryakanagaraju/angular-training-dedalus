/* tasks
1) prime numbers */

/*  function FilterArray(filter,array){
    resultArray = []
    for(let x of array){
    if(filter(x))
    resultArray.push(x);}
return resultArray;
} 

let resultss = FilterArray(function(x){
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
          return false;
        }
      }
      return true;
    
},[1,2,3,4,5,6,7]);

console.log(resultss);
 

// 2) to uppercase charaters 
const strings = ["soorya","kanagaraju"];
const upperr = strings.map((string) => string.toUpperCase());
console.log(upperr);
 

//3)word length

const names = ["kanagaraju","soorya"];
var longest = names.reduce(
    function (accumulator, currentvalue) {
        return accumulator.length > currentvalue.length ? accumulator : currentvalue;
    }
);

console.log(longest)

// 4) sum of lengths of string 
 const stringss = ["soorya","kanagaraju"];
const strlen = strings.map((string) => string.length);
sum = strlen.reduce((accumulator,currentvalue)=>accumulator+currentvalue)
console.log(sum); 


// 5) highest percentage  properties 
const student =[ {
    name : "soorya", 
    sclass : "12", 
    rollno : 12 ,
    percentage : 72
   }, {
    name : "rithick", 
    sclass : "12", 
    rollno : 2 ,
    percentage : 62
   }, {
    name : "shyam", 
    sclass : "12", 
    rollno : 21 ,
    percentage : 82
   }  ]
const max = student.reduce((prev, current) => (prev.percentage > current.percentage) ? prev : current)
console.log(max);

 
//6) convert all negative numbers to positive
const numbers = [-1,2,3,-4,-5,-6];
const upper = numbers.map((num) => num<0? num*-1:num);
console.log(upper); 

//7) students how got more than 70%
const students =[ {
    name : "soorya", 
    sclass : "12", 
    rollno : 12 ,
    percentage : 72
   }, {
    name : "ayroos", 
    sclass : "12", 
    rollno : 2 ,
    percentage : 62
   }, {
    name : "rithick", 
    sclass : "12", 
    rollno : 16 ,
    percentage : 82
   }  ]

   let result = students.filter(student => student.percentage > 70);
   console.log(result); */