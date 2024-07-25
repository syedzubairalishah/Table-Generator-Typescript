function generateTable() {
    const input = document.getElementById('numberInput') as HTMLInputElement;
    const tableContainer = document.getElementById('tableContainer');

    if (!input || !tableContainer) return;

    const number = parseInt(input.value);

    if (isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }

    let tableHtml = '<h3>Table of ' + number + '</h3><ul>';
    for (let i = 1; i <= 10; i++) {
        tableHtml += '<li>' + number + ' x ' + i + ' = ' + (number * i) + '</li>';
    }
    tableHtml += '</ul>';

    tableContainer.innerHTML = tableHtml;
}

// Add event listener to handle "Enter" key press
const inputField = document.getElementById('numberInput') as HTMLInputElement;
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        generateTable();
    }
});
