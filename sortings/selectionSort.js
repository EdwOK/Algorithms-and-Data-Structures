'use strict';

/**
 * 
 */
function selectionSort(array) {
    var minimum, temp;
    for (var i = 0; i <= array.length - 2; ++i) {
        minimum = i;

        for (var j = i + 1; j <= array.length - 1; ++j) {
            if (array[j] < array[minimum]) {
                minimum = j;
            }

            swap(array, i, min);
        }
    }
}