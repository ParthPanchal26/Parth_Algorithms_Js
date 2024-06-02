function prime(n){
    if(n<2){
        return "Not prime"
    }else{
        for(let i = 2; i < n; i++){
            if(n % i == 0){
                return "Not prime"
            }
        }
        return "prime"
    }
}

console.log(prime(9))