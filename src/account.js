function Account() {
  this.balance = 0;
  this.transactions = []
}

Account.prototype.deposit = function(type, amount, date) {
  this.balance += amount;
  this.transactions.push([date, amount, " ", this.balance])
}

Account.prototype.withdrawal = function(type, amount, date)  {
  this.balance -= amount;
  this.transactions.push([date, " ", amount, this.balance])
}
