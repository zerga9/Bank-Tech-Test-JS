function Account() {
  this.balance = 0;
  this.transactions = []
}

Account.prototype.deposit = function(type, amount, date) {
  this.balance += amount;
  this.transactions.push([type, amount, date])
}

Account.prototype.withdrawal = function(type, amount, date)  {
  this.balance -= amount;
  this.transactions.push([type, amount, date])
}
