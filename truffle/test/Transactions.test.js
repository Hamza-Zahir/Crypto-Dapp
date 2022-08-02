const Transactions = artifacts.require("Transactions");

contract("Transactions", (accounts) => {
  let contractInstance;

  before(async () => {
    await Transactions.deployed().then((instance) => {
      contractInstance = instance;
    });
  });

  it("deploys successfully", async () => {
    const address = await contractInstance.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("add To Blockchain and send transactions", async () => {
    const old_Accounts1_balance = await web3.eth.getBalance(accounts[0]);
    const old_Accounts2_balance = await web3.eth.getBalance(accounts[1]);
   const amount = 10; // ETH
   
    await contractInstance.addToBlockchain(
      accounts[1],
      "hello world",
      "hi",
      {
        from: accounts[0],
        value: amount * 10**18,
      }
       
    ).then((receipt) => {
      assert.equal(receipt.logs.length, 1, "triggers one event");
      assert.equal(
        receipt.logs[0].event,
        "Transfer",
        'should be the "Transfer" event'
      );
        assert.equal(receipt.logs[0].args.from, accounts[0]);
        assert.equal(receipt.logs[0].args.receiver, accounts[1]);
        assert.equal(receipt.logs[0].args.amount, (amount * 10**18));
        assert.equal(receipt.logs[0].args.message, "hello world");
        assert.equal(receipt.logs[0].args.keyword, "hi");
      
  });

    const new_Accounts1_balance = await web3.eth.getBalance(accounts[0]);
    const new_Accounts2_balance = await web3.eth.getBalance(accounts[1]);

    assert(old_Accounts1_balance > new_Accounts1_balance);
    assert.equal(Number(new_Accounts2_balance), (Number(old_Accounts2_balance)  + Number(amount * 10**18)));

  });

  it("get Transactions Counter", async () => {
const TransactionsCounter = await contractInstance.getTransactionsCounter();
assert.equal(TransactionsCounter, 1);

});
it("get all transactions", async () => {
  await contractInstance.getAllTransactions().then((result) => {
      assert.equal(result[0].sender, accounts[0]);
      assert.equal(result[0].receiver, accounts[1]);
      assert.equal(result[0].amount,  (10 * 10**18));
      assert.equal(result[0].message, "hello world");
      assert.equal(result[0].keyword, "hi");
  })
  
  })

});
