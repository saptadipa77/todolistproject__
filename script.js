let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(currentExpression);
        document.getElementById('display').value = result;
        currentExpression = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentExpression = '';
    }
}