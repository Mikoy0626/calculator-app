// Function to add numbers
document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    const result = num1 + num2;
    document.getElementById('result').value = result;
});

// Function to clear input fields
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
});

// Function to exit the application (browser windows typically restrict this)
document.getElementById('exitBtn').addEventListener('click', function() {
    alert('Exit button clicked - this would close the window in a desktop application');
});