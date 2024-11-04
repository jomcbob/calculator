let firstNumber = ""
let secondNumber = ""
let operater = ""
let isFirstNumber = true
let isSecondNumber = false

let num9 = document.querySelector(".num9")
num9.addEventListener("click", () => {
    document.getElementById("screen").value += 9;
    if (isFirstNumber == true) {
        firstNumber += "9"
    } else {
        secondNumber += "9"
    }
})

let num8 = document.querySelector(".num8")
num8.addEventListener("click", () => {
    document.getElementById("screen").value += 8;
    if (isFirstNumber == true) {
        firstNumber += "8"
    } else {
        secondNumber += "8"
    }
})

let num7 = document.querySelector(".num7")
num7.addEventListener("click", () => {
    document.getElementById("screen").value += 7;
    if (isFirstNumber == true) {
        firstNumber += "7"
    } else {
        secondNumber += "7"
    }
})

let num6 = document.querySelector(".num6")
num6.addEventListener("click", () => {
    document.getElementById("screen").value += 6;
    if (isFirstNumber == true) {
        firstNumber += "6"
    } else {  
        secondNumber += "6"
    }
})

let num5 = document.querySelector(".num5")
num5.addEventListener("click", () => {
    document.getElementById("screen").value += 5;
    if (isFirstNumber == true) {
        firstNumber += "5"
    } else {  
        secondNumber += "5"
    }
})

let num4 = document.querySelector(".num4")
num4.addEventListener("click", () => {
    document.getElementById("screen").value += 4;
    if (isFirstNumber == true) {
        firstNumber += "4"
    } else {  
        secondNumber += "4"
    }
})

let num3 = document.querySelector(".num3")
num3.addEventListener("click", () => {
    document.getElementById("screen").value += 3;
    if (isFirstNumber == true) {
        firstNumber += "3"
    } else {  
        secondNumber += "3"
    }
})

let num2 = document.querySelector(".num2")
num2.addEventListener("click", () => {
    document.getElementById("screen").value += 2;
    if (isFirstNumber == true) {
        firstNumber += "2"
    } else {  
        secondNumber += "2"
    }
})

let num1 = document.querySelector(".num1")
num1.addEventListener("click", () => {
    document.getElementById("screen").value += 1;
    if (isFirstNumber == true) {
        firstNumber += "1"
    } else {  
        secondNumber += "1"
    }
})

let num0 = document.querySelector(".num0")
num0.addEventListener("click", () => {
    document.getElementById("screen").value += 0;
    if (isFirstNumber == true) {
        firstNumber += "0"
    } else {  
        secondNumber += "0"
    }
})

const add = function (a, b) {
    document.getElementById("screen").value = a + b;
    return a + b;
};

const subtract = function (a, b) {
    document.getElementById("screen").value = a - b;
    return a - b;
};

const multiply = function (a, b) {
    document.getElementById("screen").value = a * b;
    return a * b
};

const divide = function (a, b) {
    document.getElementById("screen").value = a / b;
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
    operater = divide
})

let result = document.querySelector(".result")
result.addEventListener("click", () => {
    operater(parseInt(firstNumber), parseInt(secondNumber))
    firstNumber = operater(parseInt(firstNumber), parseInt(secondNumber))
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
})

