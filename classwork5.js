var obj = {
    num : 12,
    ass : 24,
    fsg : 36,
    ghf : 72
}

function check (arr) {
    for (let i of Object.values(arr)) {
        if (typeof i != "number") {
            return 'Please all object values should be numbers';
        }else if (i % 3 == 0 && i % 4 == 0){
            
        }else {
            return false
        }
    }
    return true;
}
console.log(check(obj));


//     }else if (arr % 3 == 0 && arr % 4 == 0){
//     return true
//     }else {
//     return false
//     }
// }
// console.log(check(obj));
