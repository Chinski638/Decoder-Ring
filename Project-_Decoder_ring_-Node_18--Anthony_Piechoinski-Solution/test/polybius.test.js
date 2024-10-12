const chai = require('chai');
const expect = chai.expect;

const polybiusModule = require('../src/polybius'); 

describe('Polybius Module', () => {
  describe('encode', () => {
    it('should encode a message correctly', () => {
      const input = 'hello';
      const expectedOutput = '3251131343';
      const result = polybiusModule.polybius(input, true);
      expect(result).to.equal(expectedOutput);
    });
  });

  describe('decode', () => {
    it('should decode a message correctly', () => {
      const input = '3251131343';
      const expectedOutput = 'hello';
      const result = polybiusModule.polybius(input, false);
      expect(result).to.equal(expectedOutput);
    });

    it('should return false for odd-length input', () => {
      const input = '325113134'; 
      const result = polybiusModule.polybius(input, false);
      expect(result).to.be.false;
    });
  });
});
