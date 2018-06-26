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

});
