'use strict';

/**
 * 
 */
function heapSort(array) {
    var length = array.length;
    
    buildMaxHeap(array);
    for (var i = array.length - 1; i > 0; i -= 1) {
        swap(array, 0, i);
        --length;
        heapify(array, 0, length);
    }
}


/**
 * 
 * 
*/
function heapify(array, index, heapSize) {
    var leftRange = 2 * index + 1;
    var rightRange = 2 * index + 2;
    var maximum = index;

    if (leftRange < heapSize && cmp(array[leftRange], array[index]) > 0) {
        maximum = leftRange;
    }

    if (rightRange < heapSize && cmp(array[rightRange], array[maximum]) > 0) {
        maximum = rightRange;
    }

    if (maximum !== index) {
        swap(array, maximum, index);
        heapify(array, maximum, heapSize);
    }
}


/**
 * 
 * 
 */
function buildMaxHeap(array) {
    var length = array.length;
    
    for (var i = Math.floor(length / 2); i >= 0; i -= 1) {
        heapify(array, i, length);
    }

    return array;
}