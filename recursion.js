/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0){
    return 1;
  }

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0){
    return 0;
  }
  let longestNum = words[0].length;
  let num = longest(words.slice(1));
  if (num > longestNum){
    longestNum = num;
    return longestNum;
  }
  else{
    return longestNum;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0){
    return '';
  }

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIndex = 0) {
  if (currentIndex >= arr.length) {
    return -1;
  }

  // If the current element is equal to the target value, return the current index
  if (arr[currentIndex] === val) {
    return currentIndex;
  }

  // Recursively call the function with the next index
  return findIndex(arr, val, currentIndex + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0){
    return '';
  }

  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (const key in obj){
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    }else if (typeof obj[key] === 'object'){
      strings = [...strings, ...gatherStrings(obj[key])];
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; // Value not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
    return mid; // Value found, return the index
  } else if (val < arr[mid]) {
    return binarySearch(arr, val, start, mid - 1); // Search the left half
  } else {
    return binarySearch(arr, val, mid + 1, end); // Search the right half
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
