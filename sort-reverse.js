// number sorting
// let output = [1, 2, 3, 4, 5, 6, 7, 8, 11, 2, 3, 4];

// let finalOutput = output.sort((a, b) => {
//     if (a > b)  return -1
//     if (a < b)  return 1
// })

// console.log(finalOutput)

// let strings = ["en", "un", "lugar", "de la mancha"]

const words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];

// let output = words.sort((a, b) => {
//     if (a.length > b.length){
//         return 1;
//     }

//     if (a.length < b.length){
//         return -1;
//     }

//     return 0;
// });

let output = words.sort((a, b) =>
  a.localeCompare(b, "es", { sensitivity: "base" })
).reverse();

console.log(output);
