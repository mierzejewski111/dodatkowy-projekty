const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const mathSign = document.querySelector('.mathsign');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const calculatorHistory = document.querySelector('.history');
const historyBtn = document.querySelector('.history-btn');
let result = '';

function displayNumbers()  {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) {
    return } else if (this.textContent === '.' && currentNumber.innerHTML === '' ) {
    return currentNumber.innerHTML = '0.';
    } else {
    currentNumber.innerHTML +=  this.textContent;
    }
}

function operate()  {
   if(currentNumber.innerHTML === '' && this.textContent === '-')
    return currentNumber.innerHTML = '-' ;

    
    if (mathSign.innerHTML !== '') {
        showResult()
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    currentNumber.innerHTML = '';
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';

}

function showResult()  {
    if(previousNumber.innerHTML === '' || mathSign.innerHTML === '' || currentNumber.innerHTML === '')
    return;

    let a = Number(currentNumber.innerHTML)
    let b = Number(previousNumber.innerHTML)
    let operator = mathSign.innerHTML

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case ':':
            result = b / a;
            break;
        case '2^':
            result = b ** a;
            break;
               
    }

    addToHistory();
    historyBtn.classList.add('active');
    currentNumber.innerHTML = result;   
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function addToHistory() {
    const newHistoryItem = document.createElement('li');
    newHistoryItem.classList.add('history-item');
    calculatorHistory.appendChild(newHistoryItem);
    newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`
}

function clearScreen()  {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function clearHistory()  {
    calculatorHistory.innerHTML = '';
}

function deleteAll() {
    currentNumber.innerHTML = '';
}
// nasłuchiwanie przycisków

clearButton.addEventListener('click', clearScreen);
equalsButton.addEventListener('click', showResult);
equalsButton.addEventListener('dblclick', deleteAll);
historyBtn.addEventListener('click', clearHistory);

operatorButtons.forEach((button) => button.addEventListener('click', operate));
numberButtons.forEach((button) => button.addEventListener('click', displayNumbers));

