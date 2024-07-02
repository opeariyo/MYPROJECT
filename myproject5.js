//Create a function that reverses an array

const originalArray = ['a', 'e', 'i', 'o', 'u'];
const reversedArray = [];
 for (let i=originalArray.length - 1; 
    i>= 0; i--) {
        reversedArray.push(originalArray[i]);
        }

    console.log(reversedArray)