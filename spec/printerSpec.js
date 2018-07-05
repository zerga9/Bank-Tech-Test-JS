describe("Statement", function(){
  var statement;

  beforeEach(function() {
    statement = new Statement();
  });

  it('prints account transaction', function(){
    var account = new Account();
    account.deposit("deposit", 500, "12/12/2018")
    account.withdrawal("withdrawal", 200, "12/12/2018")
    statement.print(account)
    expect(statement.array).toEqual('date || credit || debit || balance' + "\n" +
        '12/12/2018 || 500 ||   || 500' + "\n" +
        '12/12/2018 ||   || 200 || 300'+ "\n");
  })
})
