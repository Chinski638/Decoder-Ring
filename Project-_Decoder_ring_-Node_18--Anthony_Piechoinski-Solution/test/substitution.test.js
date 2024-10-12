const chai = require('chai')
const expect = chai.expect
const { substitution } = require('../src/substitution')

describe('Substitution Cipher', () => {
  describe('Encoding', () => {
    it('should encode a message correctly', () => {
      const input = "thinkful"
      const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const expectedOutput = "jrufscpw"
      const result = substitution(input, alphabet)
      expect(result).to.equal(expectedOutput)
    })

    it('should maintain spaces during encoding', () => {
      const input = "You are an excellent spy"
      const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const expectedOutput = "elp xhm xf mbymwwmfj dne"
      const result = substitution(input, alphabet)
      expect(result).to.equal(expectedOutput)
    })

    it('should return false if alphabet is not 26 characters long', () => {
      const result = substitution("thinkful", "short")
      expect(result).to.be.false
    })

    it('should return false if alphabet has duplicate characters', () => {
      const result = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
      expect(result).to.be.false
    })

    it('should ignore capitalization during encoding', () => {
      const input = "Thinkful"
      const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const expectedOutput = "jrufscpw"
      const result = substitution(input, alphabet)
      expect(result).to.equal(expectedOutput)
    })
  })

  describe('Decoding', () => {
    it('should decode a message correctly', () => {
      const input = "jrufscpw"
      const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const expectedOutput = "thinkful"
      const result = substitution(input, alphabet, false)
      expect(result).to.equal(expectedOutput)
    })

    it('should maintain spaces during decoding', () => {
      const input = "elp xhm xf mbymwwmfj dne"
      const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const expectedOutput = "you are an excellent spy"
      const result = substitution(input, alphabet, false)
      expect(result).to.equal(expectedOutput)
    })

    it('should return false if the substitution alphabet is missing', () => {
      const result = substitution("thinkful");
      expect(result).to.be.false;
    });

    it('should return false if alphabet has duplicate characters', () => {
      const result = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
      expect(result).to.be.false
    });
  });
})
