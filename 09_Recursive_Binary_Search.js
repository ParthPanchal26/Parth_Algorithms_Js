// Give a sorted array of 'n' elements and target 't', find the index of 't' in the array
// using Recursion Return -1 if the target element not found.
function RecursivwBinary(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middelIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(target === arr[middelIndex]){
        return middelIndex;
    }

    if (target < arr[middelIndex]) {
        return search(arr, target, leftIndex, middelIndex - 1);
    } else {
        return search(arr, target, middelIndex + 1, rightIndex);
    }
}

console.log(RecursivwBinary([-5, 2, 4, 6, 10], 2));
console.log(RecursivwBinary([-5, 2, 4, 6, 10], 6));
console.log(RecursivwBinary([-5, 2, 4, 6, 10], 8));