// Function for counter
function setCounterValue(inputId, count) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    let inputValue = parseInt(inputFieldValue);
    let currentCount;

    if (isNaN(inputValue)) {
        inputValue = 0;
    }

    if (count) {
        currentCount = inputValue + 1;
        inputField.value = currentCount;
    } else {
        currentCount = inputValue - 1;
        inputField.value = currentCount;
    }

    if (currentCount > 0) {
        inputField.classList.add('green');
    } else if (currentCount < 0) {
        inputField.classList.add('red');
    } else {
        inputField.classList.remove('green');
        inputField.classList.remove('red');
    }
}

// Function to get input value
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputValue = parseInt(inputFieldValue);
    return inputValue;
}

// Function to set element value
function setElementValueById(elementId, result) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = result;
}