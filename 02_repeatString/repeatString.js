const repeatString = function(word, times) {
    let string = '';
    for (i = 1; i <= times; i++) {
        string += word;
    }
    if (times < 0) {
        return string = 'ERROR';
    } else {
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
