// Helping Functions
function getInputValue(id) {
  const input = document.getElementById(id);
  const amount = parseFloat(input.value);
  input.value = '';
  return amount;
} 

function addTransactions (id, amount) {
  const currTransaction = document.getElementById(id);
  const currTransactionAmount = parseFloat(currTransaction.innerText);
  const totalTransaction = currTransactionAmount + amount;
  currTransaction.innerText = totalTransaction;
}

// Handler for deposits
document.getElementById('btn-deposit').addEventListener('click', function() {
  // Getting deposit amount
  const depositAmount = getInputValue('deposit-input');
  
  // Updating total deposit
  addTransactions('deposit-total', depositAmount);

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
  
  // Updating total withdraw
  addTransactions('withdraw-total', withdrawAmount);

  // updating balance
  const currBalance = document.getElementById('balance-total');
  const currBalanceAmount = parseFloat(currBalance.innerText);
  const totalBalance = currBalanceAmount - withdrawAmount;
  currBalance.innerText = totalBalance;
});