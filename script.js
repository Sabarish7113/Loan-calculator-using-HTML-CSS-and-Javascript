document.getElementById('calculateButton').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;

    if (isNaN(amount) || isNaN(interest) || isNaN(years) || amount <= 0 || interest <= 0 || years <= 0) {
        alert('Please enter positive values for all fields.');
        return;
    }

    const x = Math.pow(1 + interest, years);
    const monthlyPayment = (amount * x * interest) / (x - 1);
    const totalPayment = monthlyPayment * years;
    const totalInterest = totalPayment - amount;

    document.getElementById('result').innerHTML = `
        <h3>Results</h3>
        <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
        <p>Total Payment: $${totalPayment.toFixed(2)}</p>
        <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    `;
});
