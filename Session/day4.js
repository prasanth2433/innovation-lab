// Array
// an array is a special variable in javascript that can hold multiple values in a single varibale,
// in js the array is also known as a heterogenous.

// let number=[1,2,"three",true];
// let names=new Array("umar","hari");
// console.log(number[2]);
// console.log(names.length);

//filter() - it filtered the result arguments
// let number=[1,2,3,4,5];
// let result=number.filter(number => number[0]);
// console.log(result);

//slice - delete the element based on index value
// let r=number.slice(1,3);
// console.log(r)

//splice - chnages the oringinal array by adding / removing items at a specific index.
//  let number=[1,2,3,4,5];
// number.splice(1,2,"Hi");
// console.log(number)

//object:
// let details={
//     name:"js",
//     totalmark:"85",
//     //Nested object:
//     subject:{
//         Java:"90",
//         Python:"80"
//     },
//     avg:function(){
//         let sum=parseInt (this.subject.Python)+parseInt (this.subject.Java);
//         return sum;
//     }
// }
// console.log(details.totalmark)
// console.log(details["name"]);
// console.log(details.subject.Java)
// console.log(details.subject["Python"]);
// console.log(details.avg());

//Real-life use cases:
//1.Student database
//2.Employee management 
//3.E-commerce product List
//4.Quiz questions with options
//5.Movie list with rating and game

///Object destructing 
///Object destructing is a syntax in javascript that allows you to extract values from objects and
//assign them to variables in a clean and readable way.

// const person={
//     name: "Anish",
//     age: 20,
//     city: "Coimbatore"
// };
// const {name, age, city} = person;
// console.log(name);
// console.log(age);
// console.log(city);

const person=["john",20,"softwaredeveloper"];
const[name,age,desigination]=person;
console.log(name+" "+age+" "+desigination+" ");

