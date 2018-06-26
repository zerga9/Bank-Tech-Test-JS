describe("Account", function(){
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should give me a balance of 0 at the start", function(){
    expect(account.balance).toEqual(0);
  });

  it("adds value to the balance", function() {
    account.deposit("deposit", 500, "12/12/2018");
    expect(account.balance).toEqual(500);
  });

  it("decreases value of balance with withdrawal", function() {
    account.withdrawal("withdrawal", 200, "12/12/2018");
    expect(account.balance).toEqual(-200);
  });

  it("should give a date of deposit", function() {
  account.deposit("deposit", 200, "11/11/2018");
  expect(account.transactions[0]).toContain("11/11/2018")
})

it("should give a date of withdrawal", function() {
  account.withdrawal("withdrawal", 200, "11/11/2018");
  expect(account.transactions[0]).toContain("11/11/2018")
})
it("should give balance of each transaction", function() {
  account.deposit("deposit", 500, "13/10/2015")
  account.withdrawal("withdrawal", 50, "15/11/2015")
  expect(account.transactions[0]).toContain(500)
  expect(account.transactions[1]).toContain(450)
})

});
