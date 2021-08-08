//Push Front - Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array method. 
function pushFront(array, value) {
    for (var i = array.length - 1; i >= 0; i --) {
        array[i + 1] = array[i]
    }
    array[0] = value; 
    console.log(array)
}
pushFront([0,3,4], 6)


//Pop Front - Given an array, remove and return the value at the begining of the array. Do this without using any built-in array methods except pop().
function popFront(array) {
    var remove = array[0];
    for (var i = 1; i < array.length; i++) {
        array[i - 1] = array[i];
    }
    array.pop()
    console.log(array)
    console.log(remove)
}
popFront([5, 4, 3, 2, 1])


//Insert At - Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr, val) as equivalent to insertAt(arr,0,val)
function insertAt(array, index, value) {
    for (var i = array.length - 1; i >= index; i--) {
        array[i + 1] = array[i]
    }
    array[index] = value;
    console.log(array)
}
insertAt([1, 2, 3, 4, 5], 3, 6)


//Remove At - Bonus - Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr, 0).
function removeAt(array, index) {
    var remove = array[index];
    for (var i = array.length - 1; i <= index; i--) {
        array[i] = array[i + 1]
    }
    array.pop()
    console.log(array)
    console.log(remove)
}
removeAt([1, 2, 3, 4, 5, 6], 3)


//