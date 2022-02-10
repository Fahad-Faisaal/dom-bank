// Helping Functions
function getInputValue(id) {
  const input = document.getElementById(id);
  const amount = parseFloat(input.value);
  input.value = '';
  return amount;
} 

// Handler for deposits
document.getElementById('btn-deposit').addEventListener('click', function() {
  // Getting deposit amount
  const depositAmount = getInputValue('deposit-input');
  
  // Get current deposit
  const currDeposit = document.getElementById('deposit-total');
  const currDepositAmount = parseFloat(currDeposit.innerText);
  // Adding deposits
  const totalDeposit = currDepositAmount + depositAmount;
  currDeposit.innerText = totalDeposit;

  // updating balance
  const currBalance = document.getElementById('balance-total');
  const currBalanceAmount = parseFloat(currBalance.innerText);
  const totalBalance = currBalanceAmount + depositAmount;
  currBalance.innerText = totalBalance;
});


// handler for withdraw
document.getElementById('btn-withdraw').addEventListener('click', function() {
  // Getting withdraw amount
  const withdrawAmount = getInputValue('withdraw-input');
  
  // Getting current withdraws
  const currWithdraw = document.getElementById('withdraw-total');
  const currWithdrawAmount = parseFloat(currWithdraw.innerText);
  // Adding withdraw
  const totalWithdraw = currWithdrawAmount + withdrawAmount;
  currWithdraw.innerText = totalWithdraw;

  // updating balance
  const currBalance = document.getElementById('balance-total');
  const currBalanceAmount = parseFloat(currBalance.innerText);
  const totalBalance = currBalanceAmount - withdrawAmount;
  currBalance.innerText = totalBalance;

  // clearing fields
  withdrawInput.value = '';
});