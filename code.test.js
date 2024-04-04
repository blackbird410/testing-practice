const capitalize = require("./code").capitalize;
const reverseString = require("./code").reverseString;
const calculator = require("./code").calculator;
const divisionError = require("./code").divisionError;
const caesarCipher = require("./code").caesarCipher;
const analyzeArray = require("./code").analyzeArray;

const testCapitalize = [
  {
    test: "a fluffy dog walking by", 
    expected: "A fluffy dog walking by"
  },
  {
    test: "superman was never the hero",
    expected: "Superman was never the hero",
  },
  {
    test: "life should be lived simple, but not simpler",
    expected: "Life should be lived simple, but not simpler",
  },
  {
    test: "a wise man once said nothing",
    expected: "A wise man once said nothing",
  },
  {
    test: "the mouth of the righteous shall declare judgement",
    expected: "The mouth of the righteous shall declare judgement",
  }
];

const testReverse = [
  {
    test: "a fluffy dog walking by", 
    expected: "yb gniklaw god yffulf a"
  },
  {
    test: "superman was never the hero",
    expected: "oreh eht reven saw namrepus",
  },
  {
    test: "life should be lived simple, but not simpler",
    expected: "relpmis ton tub ,elpmis devil eb dluohs efil",
  },
  {
    test: "a wise man once said nothing",
    expected: "gnihton dias ecno nam esiw a",
  },
  {
    test: "the mouth of the righteous shall declare judgement",
    expected: "tnemegduj eralced llahs suoethgir eht fo htuom eht",
  }
];

const testCalculator = [
  {
    type: "addition",
    test: [1, 2],
    expected: 3,
  },
  {
    type: "substraction",
    test: [1, 2],
    expected: -1,
  },
  {
    type: "multiplication",
    test: [4, 2],
    expected: 8,
  },
  {
    type: "division",
    test: [21, 7],
    expected: 3,
  },
  // {
  //   type: "division",
  //   test: [4, 0],
  //   expected: "zero division error",
  // }
];

const testCaesarCipher = [
  {
    test: "a fluffy dog walking by", 
    key: 1,
    expected: 'b gmvggz eph xbmljoh cz'
  },
  {
    test: "superman was never the hero",
    key: 2,
    expected: 'uwrgtocp ycu pgxgt vjg jgtq',
  },
  {
    test: "life should be lived simple, but not simpler",
    key: 44,
    expected: 'daxw kzgmdv tw danwv kaehdw, tml fgl kaehdwj',
  },
  {
    test: "A wise man once said nothing",
    key: 0,
    expected: "A wise man once said nothing",
  },
  {
    test: "THE MOUTH OF THE RIGHTEOUS SHALL DECLARE JUDGEMENT",
    key: 100,
    expected: "PDA IKQPD KB PDA NECDPAKQO ODWHH ZAYHWNA FQZCAIAJP",
  },
  {
    test: "A world without hate and where everyone hold in high esteem virtue over lust and disgrace.",
    key: 50,
    expected: "Y umpjb ugrfmsr fyrc ylb ufcpc ctcpwmlc fmjb gl fgef cqrcck tgprsc mtcp jsqr ylb bgqepyac."
  },
];

const testAnalyzeArray = [
  {
    test: [1,1,1,1,1],
    expected: {
      average: 1,
      min: 1,
      max: 1,
      length: 5
    },
  },
  {
    test: [0, 0, 0, 0],
    expected: {
      average: 0,
      min: 0,
      max: 0,
      length: 4
    },
  },
  {
    test: [1,8,3,4,2,6],
    expected: {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    },
  },
  {
    test: [2,4,6,8,10,12],
    expected: {
      average: 7,
      min: 2,
      max: 12,
      length: 6
    },
  },
];

test("Testing capitalize", () => {
  testCapitalize.forEach(element => {
    expect(capitalize(element.test)).toMatch(element.expected);
  });
});

test("Testing reverseString", () => {
  testReverse.forEach(elt => {
    expect(reverseString(elt.test)).toMatch(elt.expected);
  });
});

test("Testing calculator", () => {
  testCalculator.forEach(elt => {
    switch (elt.type) {
      case "addition":
        expect(calculator.add(elt.test[0], elt.test[1])).toBe(elt.expected);
        break;
      case "substraction":
        expect(calculator.subtract(elt.test[0], elt.test[1])).toBe(elt.expected);
        break;
      case "multiplication":
        expect(calculator.multiply(elt.test[0], elt.test[1])).toBe(elt.expected);
        break;
      case "division":
        if (!elt.test[0]) expect(calculator.divide(elt.test[0], elt.test[1])).toThrow(elt.expected);
        else expect(calculator.divide(elt.test[0], elt.test[1])).toBe(elt.expected);
        break;
      default:
        break;
    }
  });
})

test("Testing Caeasar Cipher", () => {
  testCaesarCipher.forEach(elt => {
    expect(caesarCipher(elt.test, elt.key)).toMatch(elt.expected);
  });
});

test("Testing analyzeArray", () => {
  testAnalyzeArray.forEach(elt => {
    expect(analyzeArray(elt.test)).toEqual(elt.expected);
  });
});
