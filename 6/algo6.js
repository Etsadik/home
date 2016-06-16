var each = function(collection, callback) {
    if(Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection)
        }
    } else {
        for(var key in collection) {
            callback(collection[key], key, collection)
        }
    }
}



var upperCase = function(sentence) {
var sentence1 = sentence.toLowerCase().split(' ');

    for(var i = 0; i < sentence1.length; i++) {
        sentence1[i] = sentence1[i].split('');
        sentence1[i][0] = sentence1[i][0].toUpperCase();
        sentence1[i] = sentence1[i].join('');
   }
   return sentence1.join(' ');
}
var greet = "hello my friend";

console.log(upperCase(greet))





