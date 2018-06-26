function Account() {
  this.balance = 0;
}

Account.prototype.deposit = function(type, amount, date) {
  this.balance += amount;
}

Account.prototype.withdrawal = function(type, amount, date)  {
  this.balance -= amount;
}
