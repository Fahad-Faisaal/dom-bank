// Helping Functions
function getInputValue(id) {
  const input = document.getElementById(id);
  const amount = parseFloat(input.value);
  input.value = '';
  if (amount < 0) return
  return amount;
} 

function addTransactions (id, amount) {
  if (Number.isNaN(amount) || typeof amount === 'undefined') return;
  const currTransaction = document.getElementById(id);
  const currTransactionAmount = parseFloat(currTransaction.innerText);
  const totalTransaction = currTransactionAmount + amount;
  currTransaction.innerText = totalTransaction;
}

function updateBalance (amount) {
  if (Number.isNaN(amount) || typeof amount === 'undefined') return;
  const currBalance = document.getElementById('balance-total');
  const currBalanceAmount = parseFloat(currBalance.innerText);
  const totalBalance = currBalanceAmount + amount;
  currBalance.innerText = totalBalance;
}

// Handler for deposits
document.getElementById('btn-deposit').addEventListener('click', function() {
  // Getting deposit amount
  const depositAmount = getInputValue('deposit-input');

  // Updating total deposit
  addTransactions('deposit-total', depositAmount);

  // updating balance
  updateBalance(depositAmount);
});

// handler for withdraw
document.getElementById('btn-withdraw').addEventListener('click', function() {
  // Getting withdraw amount
  const withdrawAmount = getInputValue('withdraw-input');

  // Updating total withdraw
  addTransactions('withdraw-total', withdrawAmount);

  // Updating Balance
  updateBalance(-withdrawAmount);
});
