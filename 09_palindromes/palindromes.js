/* const palindromes = function (string) {
    let splitString = string.split("");
    let removedPunct = splitString.filter(char => char.replace(/[^\w\s]/g, ""));
    let reverseArray = removedPunct.reverse();
    let joinArray = reverseArray.join("").replace(/[^\w\s]/g, "");
    console.log(joinArray)
    if (joinArray === string) {
        return true;
    } else return false;
};

console.log(palindromes("racecar!")) */

const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;
  };

// Do not edit below this line
module.exports = palindromes;
