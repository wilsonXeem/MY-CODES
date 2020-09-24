var num = document.getElementById("demo").innerHTML.value;
function factorial(num){
    if (num == 1){
        return num
    }else{
        return num * factorial(num - 1)
    }
    document.getElementById("result").innerHTML = num;
}

// console.log(factorial(5));
