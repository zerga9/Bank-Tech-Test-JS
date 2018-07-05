
function Statement(){
  this.array = ''
  this.headers = ['date', 'credit', 'debit', 'balance'].join(' || ');
}
  Statement.prototype.print = function(account){
    this.array += this.headers + '\n'
    account.transactions.map(
    transaction =>  this.array += transaction.join(' || ') + '\n')


  console.log(this.array)
}
