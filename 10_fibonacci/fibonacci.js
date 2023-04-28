const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let fibArr = [0,1,1];
    for (i = 2; i < n; i++){
        fibArr.push(fibArr[i - 1] + fibArr[i]);
    }
    return fibArr[n];
};

// Do not edit below this line
module.exports = fibonacci;
