// Space and time complexity. To find a number in an array.

searchArrElement= (arr, ele) => {
    for (let i= 0; i < arr.length; i++){
        if (arr[i] == ele) {
            console.log("found");
            break;
        }
    }
}
searchArrElement([10,20,30,1,3,2,10], 1)

// space complexity : O(1) constant
// Time complexity : O(n), where n is size of array.
//time complexity to find a number in an array
//Worst case O(): element to be searched is present at the end of the array 
//Average case 0(): Element to be searched is present in the middle of the array
//Best case Omega(): element to be searched is present at the starting of the array 
//Calculation:
//worst case: O(n), where 'n' is the size of the array.
//Average case 0(n)
// Best case Omega(1), where only one iteration is happening.

//O(1)
//Space: No additional variable is created
// time: element/solution is found in the begining

//O(n)
//Space: a new variable array is created
// time: iterating over complete array

//O(n^2): O(n) * O(n) => O(n*n). for nested loop.
//Time
//for (let i = 0 to n) {
//     for(let j= 0 to n) { 
//     }
 //}

//O(2n). O(n) + O(n). for 2 loops present in the same code.
//Time
// for(){

// }
// for(){

// }


//O(log n)
//Time
//for (let i = 0 to n/2) {

 //}

// O(n* log n): O(n) * O(lon n)
// for(let i=0 to n){
//     for(let j= 0 to n/2){
//     }
// }

//O(2^n)
//Time
//Recursive
