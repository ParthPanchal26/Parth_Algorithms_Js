function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let NTI = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > NTI) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = NTI;
    }
    // return arr;
}

const arr = [-6, 20, 8, -2, 4];
InsertionSort(arr);
// console.log(InsertionSort(arr));
console.log(arr);