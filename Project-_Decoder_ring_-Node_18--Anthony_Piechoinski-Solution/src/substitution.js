const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // Check if alphabet is provided and is 26 characters long
    if (!alphabet || alphabet.length !== 26) return false

    // Check for unique characters
    const uniqueChars = new Set(alphabet)
    if (uniqueChars.size !== 26) return false

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const inputLower = input.toLowerCase()
    let output = ''

    for (let char of inputLower) {
      if (char === ' ') {
        output += ' '
        continue
      }
      
      const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char)
      output += encode ? alphabet[index] : standardAlphabet[index]
    }
    
    return output
  }

  return {
    substitution,
  };
})()

module.exports = { substitution: substitutionModule.substitution }
