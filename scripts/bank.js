// Handler for deposits
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
});


// handler for withdraw
document.getElementById('btn-withdraw').addEventListener('click', function() {
  // -----------------Getting withdraw amount--------------------
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmount = parseFloat(withdrawInput.value);
  
  // --------------Getting current withdraws---------------
  const currWithdraw = document.getElementById('withdraw-total');
  const currWithdrawAmount = parseFloat(currWithdraw.innerText);
  // Adding withdraw
  const totalWithdraw = currWithdrawAmount + withdrawAmount;
  currWithdraw.innerText = totalWithdraw;

  // ---------------updating balance-----------------
  const currBalance = document.getElementById('balance-total');
  const currBalanceAmount = parseFloat(currBalance.innerText);
  const totalBalance = currBalanceAmount - withdrawAmount;
  currBalance.innerText = totalBalance;

  // ----------------clearing fields----------------
  withdrawInput.value = '';
});