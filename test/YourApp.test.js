const YourApp = artifacts.require('./YourSmartContract.sol')

contract('YourApp', (accounts) => {
  before(async () => {
    this.yourApp = await YourApp.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.yourApp.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('does something', async () => {
    var today = new Date();
    const result = await this.yourApp.someFunction('Demo Args',date)
    const otherResult = await this.yourApp.anotherFunction()
    assert.equal(result, 1)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 1)
    assert.equal(event.name, 'Test Name')
    assert.equal(event.date, date)
  })

})
