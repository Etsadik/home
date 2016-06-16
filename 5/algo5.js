var longestString = function(sentence) {
    var long = 0;
    var temp = sentence.split(' ')
    for (var i = 0; i < temp.length; i++) {
        if(temp[i].length > long) {
            long = temp.length
        }
    }
    return long
}

var tester = 'here is the sample sentence that will show you the truth. ABARAKADABRA!'
console.log(longestString(tester))