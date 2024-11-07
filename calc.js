let firstNumber = ""
let secondNumber = ""
let operater = ""
let isFirstNumber = true
let isSecondNumber = false
let hasPeriod = false

const setElement = function (number) {
    if (document.getElementById("screen").value == '') {
        firstNumber = "0"
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
    };
}

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
    if (isFirstNumber == true) {
        firstNumber = firstNumber.toString().slice(0, -1)
        document.getElementById("screen").value = document.getElementById("screen").value.toString().slice(0, -1)
    } else if (secondNumber == "") {
        document.getElementById("screen").value = document.getElementById("screen").value.toString().slice(0, -1)
        operater = ""
    } else if (isSecondNumber == true) {
        secondNumber = secondNumber.toString().slice(0, -1)
        document.getElementById("screen").value = document.getElementById("screen").value.toString().slice(0, -1)
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

// functions for each of the buttons
const updateOperPlus = function (){
    if (!operater == "") {
        return
    }
    document.getElementById("screen").value += "+";
    isFirstNumber = false
    isSecondNumber = true
    hasPeriod = false
    operater = add
}

const updateOperMinus = function (){
    if (!operater == "") {
        return
    }
    document.getElementById("screen").value += "−";
    isFirstNumber = false
    isSecondNumber = true
    hasPeriod = false
    operater = subtract
}

const updateOperTimes = function (){
    if (!operater == "") {
        return
    }
    document.getElementById("screen").value += "×";
    isFirstNumber = false
    isSecondNumber = true
    hasPeriod = false
    operater = multiply
}

const updateOperDivd = function (){
    if (!operater == "") {
        return
    }
    document.getElementById("screen").value += "÷";
    isFirstNumber = false
    isSecondNumber = true
    hasPeriod = false
    operater = divide
}

const resultEquals = function (){
    const result = operater((parseInt(firstNumber * 1000)) / 1000, (parseInt(secondNumber * 1000)) / 1000)
    document.getElementById("screen").value = result
    firstNumber = result
    isFirstNumber = true
    secondNumber = ""
    operater = ""
}

const AC = function () {
    document.getElementById("screen").value = "";
    firstNumber = ""
    secondNumber = ""
    operater = ""
    isFirstNumber = true
    isSecondNumber = false
    hasPeriod = false
    return
}

// added clicks to buttons that run a function when they are pressed
let plus = document.querySelector(".plus")
plus.addEventListener("click", () => {
    updateOperPlus()
})

let minus = document.querySelector(".min")
minus.addEventListener("click", () => {
    updateOperMinus()
})

let times = document.querySelector(".times")
times.addEventListener("click", () => {
    updateOperTimes()
})

let divd = document.querySelector(".divd")
divd.addEventListener("click", () => {
    updateOperDivd()
})

let clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    AC()
})

let equalsButton = document.querySelector(".result")
equalsButton.addEventListener("click", () => {
    resultEquals()
})


const VALUES = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".",
    "+", "-", "*", "/", 
    "Enter", "Escape", "Backspace",
  ];
  
  // Keyboard support
  document.addEventListener("keydown", (event) => {
    if (VALUES.includes(event.key)) {
      switch (event.key) {
  
        case "+":
            updateOperPlus()
          break;
  
        case "-":
            updateOperMinus()
          break;
  
        case "*":
            updateOperTimes()
          break;
  
        case "/":
            updateOperDivd()
          break;
  
        case "Enter":
            resultEquals()
          break;
  
        case "Escape":
            AC()
          break;
  
        case "Backspace":
            backspace();
          break;
  
        default:
          setElement(event.key);
          break;
      }
    }
  });

