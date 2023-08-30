const previousNumber = document.querySelector('.previousNumber');
const mathSign = document.querySelector('.mathSign');
const currentNumber = document.querySelector('.curentNumber');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equals');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const clearHistory =  document.querySelector('.history-btn');
const showHistory =  document.querySelector('.history');
let result = '';
clear.addEventListener('click', clearAll);
equal.addEventListener('click', equalAll);
equal.addEventListener('dblclick', removeALL);
clearHistory.addEventListener('click', removeHistory);

number.forEach((button) => button.addEventListener('click', showNumber));
operator.forEach((button) => button.addEventListener('click', showO));

function clearAll() {
    currentNumber.innerHTML = '';
    mathSign.innerHTML = '';
    previousNumber.innerHTML = '';
}

function removeALL() {
    currentNumber.innerHTML = '';
}

function removeHistory() {
    showHistory.innerHTML = '';
}

function showNumber() {
    if(currentNumber.innerHTML.includes('.') && this.textContent === '.') {
    return; } else if (currentNumber.innerHTML = '' && this.textContent === '.') {
        return currentNumber.innerHTML = '0.';
    } else {
    currentNumber.innerHTML +=  this.textContent;}
}




function showO() {
    if(previousNumber.innerHTML !== '' && mathSign.innerHTML !== '' && currentNumber !== ''){
    equalAll();}

    mathSign.innerHTML = this.textContent;
}

function equalAll() {
    const a = Number(currentNumber.innerHTML);
    const b = Number(previousNumber.innerHTML);
    const operator = mathSign.innerHTML;


    switch(operator){
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case 'x':
        result = a * b;
        break;
        case '2^':
        result = a ** b;
        break;
        case ':':
        result = b / a;
        break;
    }
}

function addHistory() {
    
}