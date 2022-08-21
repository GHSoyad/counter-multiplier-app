// Add event listener for counter plus button
document.getElementById('plus-btn').addEventListener('click', function () {
    setCounterValue('counter-field', true);
})

// Add event listener for counter minus button
document.getElementById('minus-btn').addEventListener('click', function () {
    setCounterValue('counter-field', false);
})

// Add event listener for multiplier buttons
document.getElementById('multiplier').addEventListener('click', function (event) {
    const button = event.target;
    const inputValue = getInputValueById('counter-field');
    let multiplier;

    if (isNaN(inputValue)) {
        return alert('Enter Counter First!')
    }

    if (button.classList.contains('2x-btn')) {
        multiplier = inputValue * 2;
        setElementValueById('multiplier-field', multiplier);
    }
    if (button.classList.contains('5x-btn')) {
        multiplier = inputValue * 5;
        setElementValueById('multiplier-field', multiplier);
    }
    if (button.classList.contains('10x-btn')) {
        multiplier = inputValue * 10;
        setElementValueById('multiplier-field', multiplier);
    }
    if (button.classList.contains('custom-btn')) {
        const customValue = getInputValueById('custom-field');
        if (isNaN(customValue)) {
            return alert('Enter Multiplier First!')
        }
        multiplier = inputValue * customValue;
        setElementValueById('multiplier-field', multiplier);
    }
})