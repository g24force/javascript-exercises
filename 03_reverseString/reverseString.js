const reverseString = function(string) {
    const letters = [];
    let i = 0;
    while (i < string.length) {
        letters.push(string.slice(i, i + 1));
        i++;
    }
    let reversedLetters = letters.reverse();
    return letters.join("");
};

// Do not edit below this line
module.exports = reverseString;
