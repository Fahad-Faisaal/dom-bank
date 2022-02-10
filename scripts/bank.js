document.getElementById('btn-deposit').addEventListener('click', function() {
  // Getting deposit amount
  const depositInput = document.getElementById('deposit-input');
  const depositAmount = depositInput.value;
  
  // Get current deposit
  const currDeposit = document.getElementById('deposit-total');
  const currDepositAmount = currDeposit.innerText;
  currDeposit.innerText = depositAmount;

  // Clearing deposit input field
  depositInput.value = '';
})