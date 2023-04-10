module.exports =  function toNumber(text) {
    // Remove all punctuation and conjunctions from the text
    const cleanText = text.replace(/[^a-zA-Z0-9. ]/g, '').toLowerCase();
  
    // Split the text into words
    const words = cleanText.split(' ');
  
    // Define a mapping of words to their numerical equivalents
    const wordToNumber = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90,
      hundred: 100,
      thousand: 1000,
      million: 1000000,
      billion: 1000000000,
      trillion: 1000000000000,
      point: '.',
      half: 0.5,
      quarter: 0.25
    };
  
    let total = 0;
    let currentNumber = 0;
    let lastNumber = 0;
    let decimalPlaces = 0;
  
    for (const word of words) {
      const number = wordToNumber[word];
      if (number !== undefined) {
        if (word === 'point') {
          decimalPlaces = 1;
        } else if (word === 'hundred') {
            currentNumber *= 100;
          } else if (word === 'thousand' || word === 'million' || word === 'billion' || word === 'trillion') {
            total += currentNumber * wordToNumber[word];
            lastNumber = currentNumber;
            currentNumber = 0;
            decimalPlaces = 0;
          } else {
          currentNumber = currentNumber * 10 + number;
          if (decimalPlaces > 0) {
            decimalPlaces *= 10;
          }
        }
      } else if (word === 'and') {
        // Ignore the word 'and'
        continue;
      } else if (word === 'a' || word === 'an') {
        currentNumber += 1;
      } else {
        return 'Invalid input';
      }
    }
  
    if(decimalPlaces > 0) total += currentNumber / decimalPlaces;
    else total += currentNumber;

    if (lastNumber > 0 && currentNumber === 0) {
      total += lastNumber;
    }
    if(decimalPlaces > 0) return total.toFixed(2);
    return total;
  }