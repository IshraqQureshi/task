module.exports = function toWords(num) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    let words = '';
  
    if (num < 0) {
      words += 'minus ';
      num = Math.abs(num);
    }
  
    let wholeNumber = Math.floor(num);
    const fractional = Math.round((num - wholeNumber) * 100);
  
    if (wholeNumber === 0) {
      words = 'zero';
    }
  
    if (wholeNumber >= 1000000000) {
      words += toWords(Math.floor(wholeNumber / 1000000000)) + ' billion ';
      wholeNumber %= 1000000000;
    }
  
    if (wholeNumber >= 1000000) {
      words += toWords(Math.floor(wholeNumber / 1000000)) + ' million ';
      wholeNumber %= 1000000;
    }
  
    if (wholeNumber >= 1000) {
      words += toWords(Math.floor(wholeNumber / 1000)) + ' thousand ';
      wholeNumber %= 1000;
    }
  
    if (wholeNumber >= 100) {
      words += toWords(Math.floor(wholeNumber / 100)) + ' hundred ';
      wholeNumber %= 100;
    }
  
    if (wholeNumber >= 11 && wholeNumber <= 19) {
      words += teens[wholeNumber - 11] + ' ';
    } else if (wholeNumber >= 10) {
      words += tens[Math.floor(wholeNumber / 10)] + ' ';
      wholeNumber %= 10;
    }
  
    if (wholeNumber > 0) {
      words += ones[wholeNumber] + ' ';
    }
  
    if (fractional > 0) {
      words += 'point ';
  
      if (fractional >= 11 && fractional <= 19) {
        words += teens[fractional - 11] + ' ';
      } else if (fractional >= 10) {
        words += tens[Math.floor(fractional / 10)] + ' ';
        fractional %= 10;
      }
  
      if (fractional > 0) {
        words += ones[fractional] + ' ';
      }
  
      words += 'cents';
    }
  
    return words.trim();
  }