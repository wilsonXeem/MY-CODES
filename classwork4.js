let arr = [];
for (let i = 1; i <= 40; i++){
    arr.push(i);
}

// function num(par) { 
//     par.forEach(function (item, index){
//     if(item <= 30){
//         console.log(true);
//         return ;
//     }else {
//         console.log(false);
//         return ;
//     }
// })
// }
// console.log(arr);
var check = (arra)=>{
    for (i = 0; i <= arra.length -1 ; i++) {
        if (arra[i] <=30 && arra[i] >= 1) {
            
        } 
        else {
            return false
        }
    }
    return true
}
console.log(check(arr));
