document.getElementById('calculate').addEventListener('click', calculateTip);

function calculateTip() {
   const billAmount = parseFloat(document.getElementById('billAmount').value);
   const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
   const peopleCount = parseInt(document.getElementById('peopleCount').value);

   if (isNaN(billAmount) || billAmount <= 0 || isNaN(peopleCount) || peopleCount <= 0) {
      alert("Please enter valid bill amount and number of people.");
      return;

   }

   const totalTip = billAmount * tipPercentage;
   const totalBill = billAmount + totalTip;
   const amountPerPerson = totalBill / peopleCount;

   document.getElementById('totalTip').textContent = totalTip.toFixed(2);
   document.getElementById('totalBill').textContent = totalBill.toFixed(2);

   document.getElementById('amountPerPerson').textContent = amountPerPerson.toFixed(2);

   document.getElementById('result').style.display = 'block';
   
}
