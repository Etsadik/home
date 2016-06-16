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


var test = each([1,2,3,4], function(element) {
    console.log(element);
});

var pet = {
    name:'lolo',
    type:'dog',
    color:'brown'
};

var test1 = each(pet, function(element){
    console.log(element);
});

