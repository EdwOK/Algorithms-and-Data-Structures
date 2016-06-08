'use strict';

/**
 * 
 */
function bubbleSort(array) {
    for (var i = 0; i < array.length; ++i) {
        for (var j = array.length; j > 0; --j) {
            if (array[j] < array[j - 1]) {
                swap(array, j, j - 1);
            }
        }
    }
}