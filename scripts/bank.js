document.getElementById('btn-deposit').addEventListener('click', function() {
  // -----------------Getting deposit amount---------------------
  const depositInput = document.getElementById('deposit-input');
  const depositAmount = parseFloat(depositInput.value);
  
  // ----------------Get current deposit----------------------
  const currDeposit = document.getElementById('deposit-total');
  const currDepositAmount = parseFloat(currDeposit.innerText);
  // Adding deposits
  const totalDeposit = currDepositAmount + depositAmount;
  currDeposit.innerText = totalDeposit;

  // --------------------updating balance--------------------
  const currBalance = document.getElementById('balance-total');
  const currBalanceAmount = parseFloat(currBalance.innerText);
  const totalBalance = currBalanceAmount + depositAmount;
  currBalance.innerText = totalBalance;

  // ---------------Clearing deposit input field---------------
  depositInput.value = '';
})

