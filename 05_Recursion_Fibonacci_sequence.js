// Give a number 'n', find the n element of the fibonacci sequence using recursion.
function fibonacci(n) {
    if(n < 2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(9));