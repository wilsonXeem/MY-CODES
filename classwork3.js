function calc (num) {
    for (let i = 2; i <= num/2; i++){
        if (num % i == 0){
            return "not prime";
        }
    }
    return "prime";
}
console.log(calc(63));

