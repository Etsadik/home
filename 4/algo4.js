var adder = function(number) {
    if(number === 0) {
        return number
    }
    return number + adder(number - 1)
};

var test = adder(4);
console.log(test);