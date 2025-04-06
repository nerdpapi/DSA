let n = 5; // Define a number n

// Iterative approach: Uses a loop to sum numbers from 1 to n
function sum(n) {
    let sum = 0; // Initialize sum to 0

    // Loop from 1 to n, adding each number to sum
    for (let i = 1; i <= n; i++) {
        sum += i; // Add current value of i to sum
    }

    return sum; // Return the final sum
}

console.log(sum(n)); // Output: 15

// Time Complexity: O(n)
// The loop runs from 1 to n, meaning it executes n iterations.

// Each iteration performs a simple addition, making it linear time complexity O(n).

// Space Complexity: O(1)
// Only a few variables (sum, i, and n) are used.

// No extra space is required that scales with input size.

// Thus, space complexity is O(1) (constant space).




// Optimized version: Uses the formula for the sum of the first n natural numbers
function sum(n) {
    return (n * (n + 1)) / 2; // Mathematical formula: Sum = n(n+1)/2
}

console.log(sum(n)); // Output: 15

// Time Complexity: O(1)
// Uses a single mathematical formula instead of iteration.

// The formula executes in constant time, regardless of n, making it O(1).

// Space Complexity: O(1)
// No additional space is used except for a few integer variables.

// No data structures (arrays, lists, etc.) are used.

// Hence, space complexity remains O(1).