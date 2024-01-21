function removeFromArray(array, ...argsToRemove) {
    return array.filter(item => !argsToRemove.includes(item));
  }

// Do not edit below this line
module.exports = removeFromArray;
