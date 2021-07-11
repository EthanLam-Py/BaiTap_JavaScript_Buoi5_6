// Question1
var finding_number = 0;
var sum_1 = 0;
while (sum_1 <= 10000) {
    finding_number++;
    sum_1 = sum_of_n(finding_number);
}

var question1__resultspan = document.getElementById('question1__resultspan');
question1__resultspan.innerHTML = finding_number;

function sum_of_n(n) {
    var sum = (n*++n)/2;
    return sum
}

//Question2
document.getElementById('question2__btn').addEventListener('click', tinhTong)
function tinhTong() {
    var x = document.getElementById('x').value;
    var n = document.getElementById('n').value;

    x = parseInt(x);
    n = parseInt(n);

    var sum = 0;

    for (var i = 1; i <= n; i++){
        sum += Math.pow(x, i);
    }

    var question2__result = document.getElementById('question2__result');
    question2__result.style.display = 'block';

    var question3__even = document.getElementById('question2__resultspan');
    question3__even.innerHTML = sum;
}

//Question3
document.getElementById('question3__btn').addEventListener('click', tinhLuyThua)
function tinhLuyThua() {
    var N = document.getElementById('N').value;

    N = parseInt(N);

    var X = 1;

    for (var i = 1; i <= N; i++){
        X *= i;
    }

    var question2__result = document.getElementById('question3__result');
    question2__result.style.display = 'block';

    var question3__even = document.getElementById('question3__resultspan');
    question3__even.innerHTML = X;
}

// Question4
document.getElementById('question4__btn').addEventListener('click', timChanLe)
function timChanLe() {
    var int = document.getElementById('int').value;

    int = parseInt(int);

    var question4__result = document.getElementById('question4__result');

    var value = ''
    for (var i = 1; i <= int; i ++) {
        if (i % 2 == 0) {
            value = 'div chẵn ' + String(i);
            var div = creatDiv(value, 'cyan'); 
            question4__result.appendChild(div);
        }
        else{
            value = 'div lẻ ' + String(i);
            var div = creatDiv(value, 'red'); 
            question4__result.appendChild(div);
        }
    }

    question4__result.style.display = 'block';
}

function creatDiv(value, color) {
    var div = document.createElement('div');
    div.style.backgroundColor = String(color);

    var span = document.createElement('span');
    span.innerHTML=String(value);
    div.appendChild(span)

    return div
}

