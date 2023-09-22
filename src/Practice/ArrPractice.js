console.log('arr practice');

// Certainly! Here are 20 JavaScript array-related questions that can help you test and improve your knowledge:

// How do you declare an empty array in JavaScript?

{
  const arr = Array(0);
  console.log(arr);
  let arr1 = [];
  console.log(arr1);
}

// Array Initialization: Create an array with the numbers 1 to 5.

let arr = [1, 2, 3, 4, 50];

console.log(arr);

// Accessing Elements: How do you access the third element in an array?

console.log(arr[3]);

// Adding Elements: Add the number 6 to the end of an array.

arr.push(6);
console.log(arr);
//[1, 2, 3, 4, 5, 6]

// Removing Elements: Remove the second element from an array.
console.log(arr.splice(2, 1));
console.log(arr); // [1, 2, 4, 5, 6]

// Array Length: Write code to find the length of an array.
console.log(arr.length);

// Array Iteration: Use a for loop to iterate through and print all elements of an array.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Array Sum: Write a function that calculates the sum of all elements in an array of numbers.

const findSum = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
};
console.log(findSum(arr));

// Array Max Value: Write a function to find the largest number in an array of numbers.

let arr1 = [10, 20, 3, 440, 500, 2];
let findLargest = (arr) => {
  return arr.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
  });
};
console.log(findLargest(arr1));

let findLargestLoop = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(findLargestLoop(arr1), 'loop');

// Array Min Value: Write a function to find the smallest number in an array of numbers.
let findSmallest = (arr) => {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

console.log(findSmallest(arr1));

// Array Sorting: Sort an array of strings in alphabetical order.

const sortStr = (arr) => {
  return arr.sort();
};
console.log(sortStr(['ajay', 'mahesh', 'bhaves', 'dinesh', 'ankrr']));

// Array Reversal: Reverse the order of elements in an array.

const reverseArr = (arr) => arr.reverse();
console.log(reverseArr([10, 20, 30, 52]));

// Array Filtering: Create a new array containing only even numbers from an existing array.

// using forEachb method
let evenArr = (arr) => {
  let even = [];
  arr.forEach((ele) => {
    if (ele % 2 === 0) {
      even.push(ele);
    }
  });
  return even;
};
console.log(evenArr([10, 3, 2, 1, 5, 4, 63, 8, 12]));

// using filter method
let evenNumber = (arr) => {
  let even = [];
  arr.filter((ele) => {
    if (ele % 2 === 0) {
      even.push(ele);
    }
  });
  return even;
};

console.log(evenNumber([10, 20, 33, 6, 5, 4]));

// Array Mapping: Double each element in an array of numbers using the map() method.

let copy = (arr) => {
  return arr.map((ele) => {
    return ele;
  });
};

console.log(copy([10, 20, 30, 45]));

// Array Concatenation: Concatenate two arrays into a single array.

const Concatenate = (arr, arr1) => {
  return arr.concat(arr1);
};
console.log(Concatenate([10, 20], [30, 40]));

// Array Searching: Write a function that checks if a given element exists in an array.

// Array Unique Values: Write a function to remove duplicate values from an array.

const removeDuplicate = (arr) => {
  let renove = arr.filter((ele, index, arr) => {
    return arr.indexOf(ele) === index;
  });
  return renove;
};
console.log(removeDuplicate([10, 20, 20, 30, 10, 10, 50]));

// Array Slicing: Create a new array that includes elements from the third to the fifth position of an existing array.

let sliceArr = (arr) => {
  return arr.slice(3, 6);
};
console.log(sliceArr([10, 20, 30, 40, 50, 60, 40]));

// Array Joining: Convert an array of words into a single string sentence.

const joinStr = (arr) => {
  return arr.join(' ');
};
console.log(joinStr(['I', 'am', 'Blockchain', 'developer']));
// Array Splicing: Use the splice() method to replace the second element of an array with a new value.

const replace = (arr) => {
  return arr.splice(2, 1);
};
console.log(replace([10, 20, 30, 40, 50]));
