const arr = ["Lorem", 7, "ipsum", "dolor", "sit", false, "amet", "con", "sectetur", true, "adipisicing", "elit", "Officia", [1, 2, "a", true], "nisi"];
// const asc = arr.sort((a, b) => a.length - b.length);
// console.log(asc[asc.length - 1]);

const numArray = [5, 7, 12, 3, 4, 8, 11, 68, 32, 82];
// for (const element in numArray) {
//     numArray[element] *= 2;
// }
// console.log(numArray.sort((a, b) => a - b));

// for (const element in numArray) {
//     console.log(element);
//     numArray.push(numArray[element] % 2);
// }
// console.log(numArray);
const evenArray = [];
for (const element in numArray) {
    if (numArray[element] % 2 == 0) {
        evenArray.push(numArray[element]);
    }
}

concatArray = evenArray.concat(arr);

for (const element in concatArray) {
    if(typeof(concatArray[element]) != 'number' && typeof(concatArray[element]) != 'boolean') {
        console.log(concatArray[element] + ' = ' + concatArray[element].length);
        
        concatArray[element] = concatArray[element].length;
    }
}
