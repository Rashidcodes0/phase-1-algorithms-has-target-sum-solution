function hasTargetSum(array, target) {
  // Write your algorithm here
  const map = {}; // create an empty hash map

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (map[complement] !== undefined) {
      return true;
    }
    map[array[i]] = i; // insert the current element and its index to the hash map
  }
  return false; // if the loop ends  without getting complementary elements, return false
}


/* 
  Write the Big O time complexity of your function here
  - This function iterates over the input array once, so the time complexity is O(n), where n is the length of the array.
*/

/* 
  Add your pseudocode here
 * Sort the input array.
*While the left pointer is less than the right pointer, check if the sum of the values at the pointers equals the target.
*If the sum is less than the target, increment the left pointer, otherwise decrement the right pointer.
*If no pair is found that equals the target, return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
