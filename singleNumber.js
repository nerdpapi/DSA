//Using bit-wise XOR
let arr = [1, 2, 4, 5, 2, 1, 5]
function singleNumber(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num; // XOR cancels out duplicate numbers
    }
    return result;
}
console.log(singleNumber(arr));

// Time Complexity:
// The loop runs O(n) times since it iterates through the entire array once.

// Each operation (^= XOR) runs in constant O(1) time.

// Total Time Complexity: O(n)

// Space Complexity:
// We use only one variable (result), so no extra space is required.

// Total Space Complexity: O(1) (constant space)

// ✅ Best method in terms of space efficiency



//Using hashmap and object
let arr2= [1, 2, 3, 5, 4, 2, 3, 1, 4] ; 
function singleNumber(arr2) {
    let count = {} // Create an empty object to store the frequency of numbers  

    // Count occurrences of each number in the array
    for(let num of arr){
        count[num] = (count[num] || 0) + 1 ; // If num exists in count, increase its count; otherwise, set to 1  
    }
    // Find the number that appears only once  
    for(let num in count){
        if(count[num] === 1){
            return Number(num) // Convert the key back to a number and return it  
        }
    }
    return null;  // If no single occurrence is found, return null  
}
console.log(singleNumber(arr2));

// Time Complexity:
// First loop (count occurrences) runs in O(n).

// Second loop (finding unique element) runs in O(n).

// Total Time Complexity: O(n)

// Space Complexity:
// The hash map (count) stores unique elements. In the worst case (if all elements are unique), it takes O(n) space.

// Total Space Complexity: O(n)

// ✅ Best method for quick implementation but uses extra space.



//Using Sorting + pairing
let arr3= [1, 2, 3, 5, 4, 2, 3, 1, 4] ;
function singleNumber(arr3){
    arr3.sort((a,b)=> a-b); // Sort the array
    for(let i=0; i< arr3.length; i+=2){ // Increment by 2 to compare pairs
        if(arr3[i]!== arr3[i+1]){
            return arr3[i];  // Return the single number if found
        }
    }
    return null;  // Only return null after checking all numbers
}
console.log(singleNumber(arr3)) 

// Time Complexity:
// Sorting the array takes O(n log n).

// The loop runs O(n) in the worst case.

// Total Time Complexity: O(n log n) (due to sorting, which dominates the complexity)

// Space Complexity:
// Sorting algorithms like .sort() use O(1) to O(n) extra space, depending on the implementation.

// No extra data structures used apart from in-place sorting.

// Total Space Complexity: O(1) (if in-place sorting is used), O(n) (if sort uses extra space)

// ⚠️ Not the most efficient method due to sorting overhead.