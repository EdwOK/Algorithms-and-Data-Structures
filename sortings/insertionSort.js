'use strict';

/**
 * 
 */
function insertionSort(array) {
    var temp, j;
    
    for (var i = 1; i <= array.length - 1; ++i) {
        temp = array[i];
        j = i;

        while (j > 0 && (array[j - 1] >= temp)) {
            array[j] = array[j - 1];
            --j;
        }

        array[j] = temp;
    }
}