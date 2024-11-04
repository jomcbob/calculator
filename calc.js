let firstNumber = ""
let secondNumber = ""
let operater = ""
let isFirstNumber = true
let isSecondNumber = false
let hasPeriod = false

const setElement = function (number) {
    if (document.getElementById("screen").value == '0'){
        firstNumber = ""
        secondNumber = ""
        operater = ""
        isFirstNumber = true
        isSecondNumber = false
        hasPeriod = false
        document.getElementById("screen").value = ""
    }
    if (number == '.'){
        if (hasPeriod == true){
            return
        } else {
            hasPeriod = true
        }
    }
    document.getElementById("screen").value += number;
    if (isFirstNumber == true) {
        firstNumber += '' + number
    } else {
        secondNumber += '' + number
    }
};

let num9 = document.querySelector(".num9")
num9.addEventListener("click", () => setElement(9))

let num8 = document.querySelector(".num8")
num8.addEventListener("click", () => setElement(8))

let num7 = document.querySelector(".num7")
num7.addEventListener("click", () => setElement(7))

let num6 = document.querySelector(".num6")
num6.addEventListener("click", () => setElement(6))

let num5 = document.querySelector(".num5")
num5.addEventListener("click", () => setElement(5))

let num4 = document.querySelector(".num4")
num4.addEventListener("click", () => setElement(4))

let num3 = document.querySelector(".num3")
num3.addEventListener("click", () => setElement(3))

let num2 = document.querySelector(".num2")
num2.addEventListener("click", () => setElement(2))

let num1 = document.querySelector(".num1")
num1.addEventListener("click", () => setElement(1))

let num0 = document.querySelector(".num0")
num0.addEventListener("click", () => setElement(0))

let period = document.querySelector(".period")
period.addEventListener("click", () => setElement('.'))

let backSpace = document.querySelector(".back")
backSpace.addEventListener("click", () => backspace())

function backspace() {
    if (isFirstNumber == true){
    document.getElementById("screen").value = document.getElementById("screen").value.toString().slice(0, -1)
    firstNumber = firstNumber.toString().slice(0, -1)
    } else if (secondNumber == "") {
        document.getElementById("screen").value = document.getElementById("screen").value.toString().slice(0, -1) 
        operater = ""
    } else if (isSecondNumber == true) {
        document.getElementById("screen").value = document.getElementById("screen").value.toString().slice(0, -1)
        secondNumber = secondNumber.toString().slice(0, -1)
    }
  }

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b
};

const divide = function (a, b) {
    return a / b
};

let plus = document.querySelector(".plus")
plus.addEventListener("click", () => {
    if (!operater == "") {
        return
    }
    document.getElementById("screen").value += "+";
    isFirstNumber = false
    isSecondNumber = true
    hasPeriod = false
    operater = add
})

let minus = document.querySelector(".min")
minus.addEventListener("click", () => {
    if (!operater == "") {
        return
    }
    document.getElementById("screen").value += "-";
    isFirstNumber = false
    isSecondNumber = true
    hasPeriod = false
    operater = subtract
})

let times = document.querySelector(".times")
times.addEventListener("click", () => {
    if (!operater == "") {
        return
    }
    document.getElementById("screen").value += "*";
    isFirstNumber = false
    isSecondNumber = true
    hasPeriod = false
    operater = multiply
})

let divd = document.querySelector(".divd")
divd.addEventListener("click", () => {
    if (!operater == "") {
        return
    }
    document.getElementById("screen").value += "/";
    isFirstNumber = false
    isSecondNumber = true
    hasPeriod = false
    operater = divide
})

let equalsButton = document.querySelector(".result")
equalsButton.addEventListener("click", () => {
    const result = operater(parseInt(firstNumber * 100) / 100, parseInt(secondNumber * 100) / 100)
    document.getElementById("screen").value = result
    firstNumber = result
    secondNumber = ""
    operater = ""
})

let clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    document.getElementById("screen").value = "";
    firstNumber = ""
    secondNumber = ""
    operater = ""
    isFirstNumber = true
    isSecondNumber = false
    hasPeriod = false
})