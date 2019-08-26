// map
// this mapping yields all the passed angles as radians
// [2, 4, 5, 10, 20]
//   .map(angleInDegrees => (angleInDegrees * Math.PI) / 180)

//   [
//     // filter
//     // here we are filtering student grades
//     // we want to see whether this student had more than 3 bad grades
//     (2, 4, 4.5, 10, 9)
//   ].filter(grade => grade < 5);
// .length >= 3

let studentGrades = [2, 4, 4.5, 1, 2];
// filtered array will be: [2, 4, 4.5]

// const filteredBadGrades = studentGrades.filter(grade => grade < 5)

// if (filteredBadGrades.length >= 3) {
//     console.log(`☢️ Warning! this student has more than ${filteredBadGrades.length} bad grades`)
// } else {
//     console.log("Student is all right! :)")
// }

// reduce
// string concatenation example
const students = ["unai", "marta", "max", "fernando"];
let allNames = students.reduce((ac, cu) => ac + cu + ",", "");
console.log(allNames.substring(0, allNames.length - 1));

const expenses = [100, 200, 30, 1000];
console.log(expenses.reduce((ac, cu) => ac + cu * 1.21, 0) + " eur");

const expenses2 = [
  {
    item: "shoes",
    price: 100
  },
  {
    item: "school books",
    price: 200
  },
  {
    item: "dinner",
    price: 30
  },
  {
    item: "travel to thailand",
    price: 1000
  }
];
console.log(expenses2.reduce((ac, cu) => ac + cu.price * 1.21, 0) + " eur");
