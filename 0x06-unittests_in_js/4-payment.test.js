const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const spying = sinon.spy(console);
    const stubing = sinon.stub(Utils, 'calculateNumber');

    stubing.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stubing.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubing.callCount).to.be.equal(1);
    expect(spying.log.calledWith('The total is: 10')).to.be.true;
    expect(spying.log.callCount).to.be.equal(1);
    stubing.restore();
    spying.log.restore();
  });
});
