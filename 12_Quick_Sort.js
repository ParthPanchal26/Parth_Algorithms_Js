function QuickSort(arr) {
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let rigth = [];

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else{
            rigth.push(arr[i]);
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(rigth)];
}

const arr = [-6, 20, 8, -2, 4];
console.log(QuickSort(arr));