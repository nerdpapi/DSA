let arr4 = [3, 6, 2]; // Define an array with numbers

function largestNumber(arr4) {
    // Check if the array is empty
    if (arr4.length === 0) {
        return "Array is empty";
    }

    let max = arr4[0]; // Initialize 'max' with the first element

    // Loop through the array starting from index 1
    for (let i = 1; i < arr4.length; i++) {
        if (arr4[i] > max) { // If the current element is greater than 'max'
            max = arr4[i]; // Update 'max' to the new largest value
        }
    }

    return max; // Return the largest number
}

console.log(largestNumber(arr4)); // Output: 6


//Using Math function
console.log(Math.max(1, 4, 9));  // Output: 9
