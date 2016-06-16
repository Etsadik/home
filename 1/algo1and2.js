
var storage = [];

var reverseString = function(str) {
    // make the terminating case; when length is zero
    if(str.length === 0){
        // return out of recursion
        return storage
    }
    // if the original argument was a string
    if(typeof str === 'string') {
        // split it into an array and set equal to variable
        var splitStr = str.split('')
        // restart the function with the new array
        reverseString(splitStr);
    } else {
        // otherwise, push the last element into storage array
        storage.push(str[str.length-1])
        // console.log('storage after adding last indexed element', storage);
        // remove the last element from the array
        str.pop();
        var temp = str
        reverseString(str);
    }
    // return the joined storage array
    return storage.join('')
}

console.log(reverseString('dessertS'));

var empty = [];
// console.log('this should be undefined', empty[0])

var arr = [1,2,3];



var isPalindrome = function (string) {
    if(reverseString(string) === string){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('racecar'))


