function generateTable() {
    var input = document.getElementById('numberInput');
    var tableContainer = document.getElementById('tableContainer');
    if (!input || !tableContainer)
        return;
    var number = parseInt(input.value);
    if (isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }
    var tableHtml = '<h3>Table of ' + number + '</h3><ul>';
    for (var i = 1; i <= 10; i++) {
        tableHtml += '<li>' + number + ' x ' + i + ' = ' + (number * i) + '</li>';
    }
    tableHtml += '</ul>';
    tableContainer.innerHTML = tableHtml;
}
// Add event listener to handle "Enter" key press
var inputField = document.getElementById('numberInput');
inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        generateTable();
    }
});
