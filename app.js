const numberButtons = document.querySelectorAll('#number');
const resetButton = document.getElementById('reset'); 
const isEqualToButton = document.getElementById('is-equal-to');
const plusButton = document.getElementById('plus');
const divideButton = document.getElementById('divide');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multiply');
const dotButton = document.getElementById('dot');
let symbol = document.getElementById('current-symbol');
let currentOperand = document.querySelector('.current-operand');
let previousOperand = document.querySelector('.previous-operand');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperand.textContent += button.textContent;
    });
});

plusButton.addEventListener('click', () => {
    if (currentOperand.textContent === '') return;
    if (currentOperand.textContent === '-') return;
    if (symbol.textContent === '+' || symbol.textContent === '-' || symbol.textContent === '/' || symbol.textContent === '*') return;
    symbol.textContent = '+';
    previousOperand.textContent = currentOperand.textContent;
    currentOperand.textContent = '';
});

minusButton.addEventListener('click', () => {
    if (previousOperand.textContent.includes('-')) return;
    if (currentOperand.textContent === '-') return;
    if (currentOperand.textContent === '') {
        currentOperand.textContent += '-';
    } else if (symbol.textContent === '+' || symbol.textContent === '-' || symbol.textContent === '/' || symbol.textContent === '*') {
        return;
    } else {
        symbol.textContent = '-';
        previousOperand.textContent = currentOperand.textContent;
        currentOperand.textContent = '';
    }
    
});

divideButton.addEventListener('click', () => {
    if (currentOperand.textContent === '') return;
    if (currentOperand.textContent === '-') return;
    if (symbol.textContent === '+' || symbol.textContent === '-' || symbol.textContent === '/' || symbol.textContent === '*') return;
    symbol.textContent = '/';
    previousOperand.textContent = currentOperand.textContent;
    currentOperand.textContent = '';
});

multiplyButton.addEventListener('click', () => {
    if (currentOperand.textContent === '') return;
    if (currentOperand.textContent === '-') return;
    if (symbol.textContent === '+' || symbol.textContent === '-' || symbol.textContent === '/' || symbol.textContent === '*') return;
    symbol.textContent = '*';
    previousOperand.textContent = currentOperand.textContent;
    currentOperand.textContent = '';
});

dotButton.addEventListener('click', () => {
    if (currentOperand.textContent.slice(-1) === '.' || currentOperand.textContent.includes('.')) return;
    currentOperand.textContent += '.';
});

isEqualToButton.addEventListener('click', () => {
    if (currentOperand.textContent === '') return;
    if (currentOperand.textContent === '-') return;
    
    if (symbol.textContent === '+') {
        currentOperand.textContent = Number(currentOperand.textContent) + Number(previousOperand.textContent);
        symbol.textContent = '';
        previousOperand.textContent = '';
    }
    if (symbol.textContent === '-') {
        currentOperand.textContent = Number(previousOperand.textContent) - Number(currentOperand.textContent);
        symbol.textContent = '';
        previousOperand.textContent = '';
    }
    if (symbol.textContent === '/') {
        currentOperand.textContent = Number(previousOperand.textContent) / Number(currentOperand.textContent);
        symbol.textContent = '';
        previousOperand.textContent = '';
    }
    if (symbol.textContent === '*') {
        currentOperand.textContent = Number(previousOperand.textContent) * Number(currentOperand.textContent);
        symbol.textContent = '';
        previousOperand.textContent = '';
    }
});

resetButton.addEventListener('click', () => {
    currentOperand.textContent = '';
    previousOperand.textContent = ''; 
    symbol.textContent = '';
});                             



