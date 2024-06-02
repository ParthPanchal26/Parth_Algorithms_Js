// Give a number 'n', find the first 'n' element of the fibonacci sequence.

/* 
    -> In mathematics, the fibonacci sequence is a sequence in which numbers are the sum of
    the two preceding ones.
    -> The first two numbers are 0 and 1.
    fibonacci(2) = [0, 1]
    fibonacci(3) = [0, 1, 1]
    fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]
*/

function fibonacci(n) {
    const fib = [0, 1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]