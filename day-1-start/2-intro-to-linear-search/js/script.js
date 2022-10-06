const citiesOfNorway = ["Oslo", "Bergen", "Tromsø", "Trondheim", "kristiansand"];


// indexOf
// Includes
// find
// findIndex

// Linear Search


// EXAMPLE

// write a function, call it whatever you want,
// but it accepts an array and a value.
// call it linearSearch, and it takes an array full of let's just say it's numbers,

function linearSearch(arr, value) {
    // search for the value in the array
    // if you find the value return the index of this value
    // if you don't find the value then return -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1
}

const values = [5, 8, 1, 100, 12, 3, 12];
const foundValue = linearSearch(values, 5);
console.log("foundValue Index",foundValue);





