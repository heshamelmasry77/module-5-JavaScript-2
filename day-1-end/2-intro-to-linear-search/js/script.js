// Let's imagine we have an array of cities of Norway

const citiesOfNorway = ["Oslo", "Bergen", "Tromsø", "Trondheim", "kristiansand"];
//
// So imagine that a user typed something in, filling in a form,
// and they're trying to create an address,
// and they need to enter
// a city.
// And for our application,
// we want to make sure it's in this array.

// What's the best way of doing that?


// And the simplest way is just
// to look at every single element in
// order and check if it's what we want,

// if we want to search for kristiansand then we start from the
// beginning, and we go on each item,
// and we check if it is kristiansand or not


// that is called Linear search!!

// indexOf
// Includes
// find
// findIndex


// All of these methods are doing the same thing behind the scenes.
// They're checking every element, one at a time to check if whatever we pass in.


// EXAMPLE

const numbers = [5, 8, 1, 100, 12, 3, 12];

// So if we were to have this list of numbers,

// this array,

// and we want to check for 12, we're going
// to search if it's in there.
// We just start at the beginning.
//
// It's 5 >> 12.
// Nope.

//Is 8 >> 12.
// Nope.

// It's 1 >> 12.
// Nope.

//Is 100 >> 12.
// Nope.

// It's 12 >> 12.
// 12 is 12. yes yes!!
// we will return the index or the value for example


//Is 8 >> 12.
// Nope.


// EXAMPLE
//
//
// So write a function, call it whatever you want, but it accepts an array and a value.
//
// So call it linearSearch and it takes an array full of let's just say it's numbers,

// Let's say it's numbers and then a value, another number.
//
//  You just loop through the entire array and check if the current array
//  element is equal to the value
//
// that we pass in and if it is, return the index at which it's found.
//
// And if it's never found, return negative one.

const values = [5, 8, 1, 100, 12, 3, 12];

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}

console.log(linearSearch(values, 100));
