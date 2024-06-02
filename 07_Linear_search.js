function search(n) {
    let arr = [9, 14, 4, 6, 15, 11, 17, 19, 1, 20, 12, 7, 8, 5, 2, 10, 18, 16, 3, 13];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return `index : ${i}, Value : ${n}`;
        }
    }
    return `Element not in array`
}

console.log(search(12))