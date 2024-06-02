// Give a number 'n', determine if the number is power of 2 or not.

// pseudocode
// function POT(n) {
    // if(n < 1){
        // return false;
    // } 
    // while(n > 1) {
        // if(n % 2 !== 0){
            // return false;
        // }
        // n = n / 2; 
    // }
    // return true;
// }

function POT(n){
    if(n < 1){
        return false;
    }
    return (n & (n-1)) == 0;
}

console.log(POT(8));
