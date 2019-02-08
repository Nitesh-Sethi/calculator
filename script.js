window.addEventListener('load', handleEvents)

function handleEvents() {
    let valButton = document.querySelectorAll('#value')
    let oprButton = document.querySelectorAll('#operator')
    document.querySelector('#zero').addEventListener('click', printZero)
    document.querySelector('#decimal').addEventListener('click', printDecimal)
    document.querySelector('#backspace').addEventListener('click', backspace)
    document.querySelector('#equal').addEventListener('click', equal)
    valButton.forEach(button => button.addEventListener('click', printDigit))
    oprButton.forEach(button => button.addEventListener('click', printOperator))
}

// OPerator print function
let opr = false
function printOperator() {
    if (document.querySelector('.exp').innerText == '' && (this.innerText == '*' || this.innerText == '/')) {
        document.querySelector('.exp').innerText = ''
    }
    else if (opr == true) {
        let op = document.querySelector('.exp').innerText
        document.querySelector('.exp').innerText = op.substring(0, op.length - 1) + this.innerText
    }
    else {
        document.querySelector('.exp').innerText += this.innerText
        opr = !opr
        decimal = false
        isEqual = false
    }
    // to disappear '*' and '/' only if textbox contains '*' and '/'
    if(document.querySelector('.exp').innerText == '*' || document.querySelector('.exp').innerText == '/') {
        document.querySelector('.exp').innerText = ''
    }
}

// Value print function
function printDigit() {
    document.querySelector('.exp').innerText += this.innerText
    opr = false
}

// Zero print function
function printZero() {
    if (!document.querySelector('.exp').innerText == '') {
        document.querySelector('.exp').innerText += this.innerText
    }
}

// Decimal print function
let decimal = false
function printDecimal() {
    if (!decimal) {
        document.querySelector('.exp').innerText += this.innerText
        decimal = !decimal
    }
}

// backspace function
function backspace() {
    let op = document.querySelector('.exp').innerText
    document.querySelector('.exp').innerText = op.substring(0, op.length - 1)
    if(document.querySelector('.exp').innerText == '') {
        document.querySelector('.ans').innerText = ''
    }
}

// Equal function
let isEqual = false
function equal() {
    if(!isEqual && !document.querySelector('.exp').innerText == '') {
        document.querySelector('.ans').innerText = eval(document.querySelector('.exp').innerText)
    }
    isEqual = !isEqual
}
