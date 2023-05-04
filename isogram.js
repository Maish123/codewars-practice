// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case

// solution 1=> loop through array comparing one index to the one after it.
// if they look alike return true if not return false
// function isIsogram(str){
//     var i, j;
//     str = str.toLowerCase();
//     for(i = 0; i < str.length; ++i) {
//       for(j = i + 1; j < str.length; ++j) {
//         if(str[i] === str[j]) {
//           return false;
//         }
//       }
//     }
//     return true;
//  }

// soltion 2=> split string then sort it, if the i+1 == i then it is an isogram, if not it isnt

// function isIsogram(string){
//     if(string.isEmpty){
//         return true;
//     } else {
//         string = string.toLowerCase();
//     }
//     let array = string.split('');
//     for(let i = 0; i < array.length; i++){
//         if(sortedArray[i+1] == sortedArray[i]){
//             return false;
//         }
//     }
//     return true;
// };

// function getSum(a, b){
//     if(a==b){
//         return a
//     } else if(a < b){
//         return a + getSum(a+1,b)
//     } else{
//         return a + getSum(a-1,b)
//     }
// }

// console.log(getSum(8,3))

// replace elements on a string. if A let it be T, if C let it be G
// convert string into an Array, loop through it and check the characters.
// if at position [i], "T" replaced to "A" and viseversa, and "C" replaced with "G"
// and viseversa.

function DNAStrand(dna){
    let dnaArr = dna.split('');
    let newDnaArr = [];
    for(let i = 0; i < dnaArr.length; i++){
        if(dnaArr[i] == "A"){
            newDnaArr.push("T")
        } else if(dnaArr[i] == "T"){
            newDnaArr.push("A")
        } else if(dnaArr[i] == "C"){
            newDnaArr.push("G")
        } else if(dnaArr[i] == "G"){
            newDnaArr.push("C")
        } else{
            newDnaArr.push(dnaArr[i])
        }
    }
    console.log(newDnaArr)
    return newDnaArr.join('');
}