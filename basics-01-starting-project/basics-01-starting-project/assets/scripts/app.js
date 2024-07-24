const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription =  `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    if (
        calculationType !== 'ADD' && 
        calculationType !== 'SUBTRACT' && 
        calculationType !==  'MULTIPLY' && 
        calculationType != 'DIVIDE' ||
        !enteredNumber
    ) {
        return; 
    }
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') { 
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


function add() { 
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

function calculate(operation) {
    if (operation === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (oeration === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
