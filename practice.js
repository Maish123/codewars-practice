// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// the function should ru this way:  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// create a for loop that attatches the first three numbers to the first part, next three numbers to the second part and the last four
// digits to the third part
// so if i<3, i must be pushed to the firstpart but converted to a string
// if  i>=3 && i<6 , i must be pushed to the second part and converted to a string
// if i >6, then i has to be pushed to the third part and converted to a string

// function createPhoneNumber(numbers) {
//   let firstPart = "";
//   let secondPart = "";
//   let thirdPart = "";
//   for (let i = 0; i < numbers.length; i++) {
//     if (i < 3) {
//       firstPart += numbers[i].toString();
//     } else if (i >= 3 && i < 6) {
//       secondPart += numbers[i].toString();
//     } else if (i >= 6) thirdPart += numbers[i].toString();
//   }
//   return `'(${firstPart}) ${secondPart}-${thirdPart}'`;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words reversed
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present

// function spinWords(string){
//     let sentence = '';
//     let separated = string.split(" ");
//     console.log (separated);
//     for(let i = 0; i < separated.length; i++){
//         if(sentence) sentence += ' ';
//         else if (separated[i].length >=5){
//             sentence += separated[i].split('').reverse().join('');
//         } else{
//             sentence += separated[i];
//         }
//     }
//     return sentence;
// };

// console.log(spinWords('Hey you!'));
// console.log(spinWords( "Hey fellow warriors"))

// function spinWords(backward) {
//   let sentence = "";
//   let separate = backward.split(" ");

//   for (let i = 0; i < separate.length; i++) {
//     if (sentence) sentence += " ";
//     if (separate[i].length >= 5) {
//       sentence += separate[i].split("").reverse().join("");
//     } else {
//       sentence += separate[i];
//     }
//   }
//   return sentence;
// }

// console.log(spinWords("Hey fellow warriors"));

let str = "Deniis";
let arr = str.split('');
let sortedArray = arr.slice().sort();
console.log(sortedArray);
console.log(arr);

function checkChar(sortedArray){
    for(let i = 0; i<sortedArray.length; i++){
        if(sortedArray[i+1] == sortedArray[i]){
            return false
        }
    }
    return true;
}
console.log( checkChar(sortedArray));