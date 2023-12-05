//! Push Front
/*
Given an array and an additional value, insert this value at the beginning of the array. 
You may use .push(), you are able do this without it though!

Examples:

pushFront([5,7,2,3], 8) => [8,5,7,2,3]
pushFront([99], 7) => [7,99]
*/

//? Solution:
let pushFront = (arr, num) => {
  // arr.push(num);
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
    // console.log(arr);
  }

  arr[0] = num;
  console.log(arr);
  return arr;
}

pushFront([2, 1, 5], 123);

//? OR:

let pushFrontVariant = (arr, num) => {
  arr.unshift(num);
  console.log(arr);
  return arr;
}

pushFrontVariant([2, 6, 8], 7)

//! Pop Front
/* 
Given an array, remove and return the value at the beginning of the array. 
Prove the value is removed from the array by printing it. 
You may use .pop(), you are able do this without it though!

Examples:

popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
*/

//? Solution:
let popFront = (arr) => {
  let poppedNum = arr[0]
  // Store the first index from the start
  console.log(poppedNum);

  for (let i = 0; i < arr.length - 1; i++) {
    // Initialize i at 0, while I is still less than the length of the array, increase i by one each iteration
    arr[i] = arr[i + 1]
    // arr[0] = arr[0 + 1] (1)
    // arr[1] = arr[1 + 1] (2)
    // console.log("working...")
  }
  // Pop the duplicated now that everything has shifted:
  arr.pop();
  console.log(arr);
  console.log(`The number removed was ${poppedNum}`)
}

popFront([1, 2, 3])
popFront([5, 23, 57, 11])

//! Insert At
/*
Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

Examples:

insertAt([100,200,5], 2, 311) => [100,200,311,5]
insertAt([9,33,7], 1, 42) => [9,42,33,7]
*/

//? Solution:


//! Bonus: Remove At:
/*
Given an array and an index into array, remove and return the array value at that index. 
Prove the value is removed from the array by printing it. 
Think of popFront(arr) as equivalent to removeAt(arr,0).

Examples:

removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
*/

//? Solution:

//! Bonus: Swap Pairs
/*
Swap positions of successive pairs of values of given array. 
If length is odd, do not change the final element.

Examples:

insertAt([1,2,3,4]) => [2,1,4,3]
insertAt(["Brendan",true,42]) => [true,"Brendan",42]
*/

//? Solution:

//! Bonus: Remove Duplicates
/*
Given a sorted array, remove duplicate values. 
Because array elements are already in order, all duplicate values will be grouped together. 
If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

Examples:

removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
removeDupes([9,19,19,19,19,19,29]) => [9,19,29]
*/

//? Solution:
