exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      return (num >> (bit-1)) % 2;
  },

  base10: function(str) {
      return parseInt(str, 2);
  },

  convertToBinary: function(num) {
      return (num).toString(2);
  },

  multiply: function(a, b) {
    var mul1 = getMultiplicant(a);
    var mul2 = getMultiplicant(b);

    var result = (mul1.num * mul2.num) / (mul1.multiplier * mul2.multiplier);
    return result;

    function getMultiplicant (number){
      var x = number.toString();
      var decimalIndex = x.indexOf('.');
      var multiplier = 0;
      if(decimalIndex>-1) {
        multiplier = x.length - decimalIndex;
      }
      var nonDecimalNum = number * Math.pow(10, multiplier);

      return {
        num: nonDecimalNum,
        multiplier: Math.pow(10, multiplier)
      }
    }

  }
};
