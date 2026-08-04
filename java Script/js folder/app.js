// let arr = [1 ,2,3,4,5];
// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);

// let num =[1,2,3,4,5];
// let doubble = num.map((el) =>{
//     return el*2;
// });

let students = [
    {
        name : "jhu",
        marks : 90
    },
    {
        name  :"hjfk",
        marks :98.2,
    },
    {
        name : "bhbjhu",
        marks : 65.2
    }
];

let gpa = students.map((el)=>{
    return el.marks/10;
});

let nums = [1,2,3,4,5,6,7,8,9];
let ans = nums.filter((el)=>{
    return el%2==0;
});