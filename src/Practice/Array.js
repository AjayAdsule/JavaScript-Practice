//q-1 Write a JavaScript function to check whether an `input` is an array or not.

// check array is function
// Array.isArray() is metod to check the value is array it don't check value prototype
const checkIsArray = (arr) => {
  return Array.isArray(arr);
};

console.log(checkIsArray([10, 20, 5]));
console.log(checkIsArray({ name: 'ajay' }));

//q-2  Write a JavaScript function to clone an array.
// concat() method is user to merge two array it does not change existing array
const cloneArr = (arr) => {
  return arr.concat(arr);
};

console.log(cloneArr([10, 20]));

//q-3 Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
const getFirstElemen = (arr) => {
  return arr[0];
};
console.log(getFirstElemen(['[]', 10, 20, 30]));

//q-4 write a javascript function that will return last index of array

const getlastElement = (arr) => {
  let index = arr.length - 1;
  return arr[index];
};
console.log(getlastElement([10, 20, 30, 50, 100]));

//q-5 Write a simple JavaScript program to join all elements of the following array into a string.
// we are using join method if we use split it gives you array but we have already array
// join method return you new string from array
const joinIntoStr = (arr) => {
  return arr.join(' ');
};
console.log(joinIntoStr(['ajay', 'is', 'blockchain', 'develort']));

//q-6 Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
// first we find even number
//even number are those who is divisible by 0
// and insert dash to that even number

const insertDash = (...num) => {
  let nums = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      nums.push(Number(`-${num[i]}`));
    } else {
      nums.push(num[i]);
    }
  }
  return nums.toString();
};
console.log(insertDash(10, 2, 3, 5, 6, 8, 7, 1));

//q-7 Write a simple JavaScript program to join all elements of the following array into a string.
//Sample array : myColor = ["Red", "Green", "White", "Black"]; "Red,Green,White,Black"
const joinElement = (arr) => {
  return arr.join(' ');
};
console.log(joinElement(['red', 'green', 'orange']));

//q-8 Write a JavaScript program to sort the items of an array.
/* 
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

const sortArr = (arr) => {
  return arr.sort();
};
console.log(sortArr([10, 50, 30, 55, 5]));

/*
q-9
Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

/*
9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
we need to convert string into array 
then go to first letter of that element and do to lowercase
*/

const lowerFirst = (word) => {
  let arr = word.split(' ');

  for (let i = 0; i < arr.length; i++) {
    return arr[i].charAt(0).toLowerCase();
  }
  return arr;
};
console.log(lowerFirst('I AM BLOCKCHAIN DEVELOPER'));

const obj1 = [
  {
    name: 'ajay',
    age: '22',
    answer: 'blockchain',
  },
  {
    name: 'vijay',
    age: '22',
    answer: 'Full',
  },
  {
    name: 'dinesh',
    age: '25',
    answer: 'block',
  },
];
const obj2 = [
  {
    name: 'ajay',
    age: '22',
    answer: 'blockchain',
  },
  {
    name: 'vijay',
    age: '24',
    answer: 'Full-stack',
  },
  {
    name: 'dinesh',
    age: '25',
    answer: 'block',
  },
];
let equals = 0;
if (JSON.stringify(obj1[0]) === JSON.stringify(obj2[0])) {
  equals += 1;
}
if (JSON.stringify(obj1[1].age) === JSON.stringify(obj2[1].age)) {
  equals += 1;
}
console.log(equals);


