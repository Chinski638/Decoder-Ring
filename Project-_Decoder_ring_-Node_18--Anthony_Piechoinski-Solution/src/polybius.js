const polybiusModule = (function () {
  const square = {
    a: '11', b: '21', c: '31', d: '41', e: '51',
    f: '12', g: '22', h: '32', i: '42', j: '42', k: '52',
    l: '13', m: '23', n: '33', o: '43', p: '53',
    q: '14', r: '24', s: '34', t: '44', u: '54',
    v: '15', w: '25', x: '35', y: '45', z: '55'
  };

  const reverseSquare = {
    '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
    '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k',
    '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
    '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u',
    '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z'
  };

  function polybius(input, encode = true) {
    if (encode) {
      return input
        .toLowerCase()
        .split("")
        .map((char) => {
          if (char === " ") return " "; // keep spaces
          return square[char] || char; // Map the character or keep it as is if non-alphabet
        })
        .join("");
    } else {
      const noSpaces = input.replace(/ /g, "");
      if (noSpaces.length % 2 !== 0) return false; // Invalid if odd length without spaces

      let decoded = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          decoded += " ";
        } else {
          const pair = input[i] + input[i + 1];
          decoded += reverseSquare[pair] || pair;
          i++; // Skip the next character since we're processing pairs
        }
      }
      return decoded;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
