function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let t = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = t;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

let arr = [4, 3, 7, -7, 2];
console.log(bubbleSort(arr))