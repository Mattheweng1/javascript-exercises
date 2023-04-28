const palindromes = function (str) {
    const onlyLettersArr = str
        .toLowerCase()
        .split("")
        .filter(c => c >= 'a' && c <= 'z');
    return onlyLettersArr.join("") === onlyLettersArr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
