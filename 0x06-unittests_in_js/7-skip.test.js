const { expect } = require('chai');

describe('Testing numbers', () => {
    it('20 is equal to 20', () => {
        expect(20 === 20).to.be.true;
    });

  it.skip('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

    it('11 is equal to 11', () => {
        expect(11 === 11).to.be.true;
    });

  it('31 is equal to 31', () => {
    expect(31 === 31).to.be.true;
  });

  it('14 is equal to 14', () => {
    expect(14 === 14).to.be.true;
  });

  it('55 is equal to 55', () => {
    expect(55 === 55).to.be.true;
  });

  it('61 is equal to 61', () => {
    expect(61 === 61).to.be.true;
  });

  it('78 is equal to 78', () => {
    expect(78 === 78).to.be.true;
  });
});
