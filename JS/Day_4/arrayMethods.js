let arr=[1,2,3,4,5];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
    
// }

// arr.map((data => {
//     console.log(data);
    
// }))
// console.log("=====================================")

// arr.forEach((data => {
//     console.log(data);
    
// }))


// const mapArr = arr.map((data => {
//     return data*2;
    
// }))
// console.log(mapArr);
// console.log("=====================================")

// const forEachArr = arr.forEach((data => {
//     return data*2;
    
// }))
// console.log(forEachArr);

// let studentDetails = {

//     name:"Shubham Sonavale",
//     age: 22,
//     designation: "Software Developer",
//     company: "TCS",
// }
// console.log(studentDetails.name);

let allInOne = [
    {

        name:"Shubham Sonavale",
        age: 22,
        designation: "Software Developer",
        company: "TCS",
        marks:96,
    },
    {

        name:"Raja Kannu",
        age: 24,
        designation: "Selsforce Developer",
        company: "Wipro",
        marks:87,
    },
    {

        name:"Ajay Bhagat",
        age: 22,
        designation: "App Developer",
        company: "TCS",
        marks:56,
    },
]
// console.log(allInOne[2].name);
const newData = allInOne.filter((data) => {
    return data.marks<60;
    
})
console.log(newData);

