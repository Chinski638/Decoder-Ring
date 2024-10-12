const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // Check shift
    if (!shift || shift < -25 || shift > 25) return false;

    // Encode or decode
    if (!encode) shift = -shift;

    // Ensure consistent case sensitivity
    input = input.toLowerCase();

    // Store results
    let results = '';

    // Do the thing
    for (let i = 0; i < input.length; i++) {
      let char = input[i];

      // Shift only letters
      if (char >= 'a' && char <= 'z') {
        let code = char.charCodeAt(0);
        // Get shifted char
        let shiftedCode = code + shift;

        // Wrap around if needed
        if (shiftedCode > 122) {
          shiftedCode = 96 + (shiftedCode - 122);
        } else if (shiftedCode < 97) {
          shiftedCode = 123 - (97 - shiftedCode);
        }

        results += String.fromCharCode(shiftedCode);
      } else {
        // If not a letter, keep the character as it is (spaces, punctuation, etc.)
        results += char;
      }
    }

    return results;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
