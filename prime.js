function x(prm){
    for (let i = 2; i < prm/2; i++){
        if (prm % i == 0){
            return "not prime"
        }
    }
    return "prime"
}
console.log(x(66));
