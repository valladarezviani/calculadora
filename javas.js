let currentInput = '';
let memory = '';  // Para almacenar resultados anteriores
let history = []; // Para almacenar el historial de cálculos

function inputValue(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        updateDisplay('0');
    } else {
        updateDisplay(currentInput);
    }
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (result === Infinity || isNaN(result)) {
            alert("Operación inválida");
        } else {
            memory = result;
            history.push(`${currentInput} = ${result}`);
            updateDisplay(result);
            currentInput = result.toString();
        }
    } catch {
        alert("Error en la operación");
    }
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}
