const capitalize = (s) => {
  if (s.length === 0) return '';
  return s[0].toUpperCase() + s.slice(1);
}

const reverseString = (s) => {
  let r = "";
  let l = s.length;

  while (l--) {
    r +=  s[l];
  }

  return r;
}

function divisionError() {
  throw new Error("zero division error");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b !== 0) return a / b;
    else divisionError();
  }
}

const isLetter = (c) => {
  let letter = c.toLowerCase();
  return letter >= 'a' && letter <= 'z';
} 

const isLowerCase = (c) => {
  return c === c.toLowerCase() && c !== c.toUpperCase();
}

const caesarCipher = (message, key) => {
  let cipher = "";
  let l, lowBound;
  Array.from(message).forEach(c => {
    if (isLetter(c)) {
      lowBound = (isLowerCase(c)) ? "a" : "A";
      l = String.fromCharCode((c.charCodeAt() + (key % 26)) % (lowBound.charCodeAt() + 26));
      if (l < lowBound) l = String.fromCharCode(l.charCodeAt() + lowBound.charCodeAt());
      cipher += l;
    } else cipher += c;
  });

  return cipher;
}


const analyzeArray = (arr) => {
  let sum = 0, min = arr[0], max = 0;
  arr.forEach(element => {
    sum += element;
    min = (element < min) ? element : min;
    max = (element > max) ? element : max;
  });

  return {
    average: sum / arr.length,
    min,
    max,
    length: arr.length,
  }
};

module.exports = { capitalize, reverseString, calculator, divisionError, caesarCipher, analyzeArray};
