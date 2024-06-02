// Give a sorted array of 'n' elements and target 't', find the index of 't' in the array.
// Return -1 if the target element not found.

function binarySearch(n) {
    let arr = [-5, 2, 4, 6, 10];
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex){
        let middelIndex = Math.floor((leftIndex + rightIndex)/2);
        if(n === arr[middelIndex]){
            return middelIndex;
        }
        if(n < arr[middelIndex]){
            rightIndex = middelIndex - 1; 
        } else{
            leftIndex = middelIndex + 1;
        }
    }
    return `Element not in array`;
}

console.log(binarySearch(10));