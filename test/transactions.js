const { expect } = require('chai');

describe('Transactions', function () {
	it('Should return the transactions count', async () => {
		const contract = await ethers.getContractFactory('Transactions');

		const TransactionsContract = await contract.deploy();

		expect(await TransactionsContract.getTransactionCount()).to.equal(0);
	});
});
