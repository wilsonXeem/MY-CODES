function myFunction() {
    function input(val) {
        return document.getElementById(val).value;

    }
    function write(wrt, ant) {
        return document.getElementById(wrt).innerHTML = ant;
    }

    let unit = input('entry');

    let load1 = input('load1');
    let load2 = input('load2');
    let load3 = input('load3');
    let load4 = input('load4');
    let load5 = input('load5');
    let load6 = input('load6');
    let load7 = input('load7');
    let load8 = input('load8');
    let load9 = input('load9');
    let load10 = input('load10');
    let load11 = input('load11');
    let load12 = input('load12');

    let figeq1 = input('figeq1');
    let figeq2 = input('figeq2');
    let figeq3 = input('figeq3');
    let figeq4 = input('figeq4');
    let figeq5 = input('figeq5');
    let figeq6 = input('figeq6');
    let figeq7 = input('figeq7');
    let figeq8 = input('figeq8');
    let figeq9 = input('figeq9');
    let figeq10 = input('figeq10');
    let figeq11 = input('figeq11');
    let figeq12 = input('figeq12');

    function result(load, figeq) {
        return load * figeq;
    }

    let result1 = result(load1, figeq1);
    let result2 = result(load2, figeq2);
    let result3 = result(load3, figeq3);
    let result4 = result(load4, figeq4);
    let result5 = result(load5, figeq5);
    let result6 = result(load6, figeq6);
    let result7 = result(load7, figeq7);
    let result8 = result(load8, figeq8);
    let result9 = result(load9, figeq9);
    let result10 = result(load10, figeq10);
    let result11 = result(load11, figeq11);
    let result12 = result(load12, figeq12);

    let total = [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, result11, result12]

    let j = 0
    for (let i of total) {
        j += i;

    }
    ttal = write('paste', j);
    let final = j / unit;
    gp = write('gp', final);
} 