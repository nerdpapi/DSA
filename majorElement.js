// 1️⃣ First Function: majorElement() (Efficient Approach)
let array = [2, 3, 2];

function majorElement(array) {
    let count = {}; // Initialize an empty object to track occurrences

    // Traverse the array and count occurrences of each element
    for (let num of array) {
        count[num] = (count[num] || 0) + 1; // Increment the count for `num`

        // If an element appears more than `n/2` times, return it immediately
        if (count[num] > array.length / 2) {
            return num;
        }
    }

    return "Major Element Not Found"; // If no majority element exists
}

console.log(majorElement(array)); // Output: 2

// Time & Space Complexity
// Time Complexity: O(n) → Single loop that counts elements and checks simultaneously.

// Space Complexity: O(n) → Uses an object (count) to store frequencies.


// 2️⃣ Second Function: majorNumber() (Less Efficient Approach)
let array2 = [3, 2, 3];

function majorNumber(array2) {
    let count = {}; // Initialize an empty object to store frequency

    // First loop: Count occurrences of each number
    for (let num of array2) {
        count[num] = (count[num] || 0) + 1;
    }

    // Second loop: Check if any number appears more than `n/2` times
    for (let num in count) {
        if (count[num] > array2.length / 2) {
            return Number(num); // Convert the object key back to a number
        }
    }

    return "No majority element"; // If no majority element is found
}

console.log(majorNumber(array2)); // Output: 3

// Time & Space Complexity
// Time Complexity: O(n) + O(n) = O(n)

// First loop: O(n) → Counts occurrences.

// Second loop: O(n) → Checks for majority.

// Space Complexity: O(n) → Uses an object (count) to store element frequencies.

// Which Function is More efficient?
// Between majorElement() and majorNumber(), the first function (majorElement()) is more efficient because:

// It detects the majority element while counting, reducing the need for a second loop.

// It returns the result as soon as a majority element is found, making it more optimal for early detection.

// Time complexity remains O(n), but it performs fewer operations in practice.

