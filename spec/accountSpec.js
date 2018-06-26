describe("Account", function(){
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should give me a balance of 0 at the start", function(){
    expect(account.balance).toEqual(0);
  });

});
