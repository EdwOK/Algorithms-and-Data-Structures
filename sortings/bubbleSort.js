'use strict';

function bubbleSort(array) {
    var arrayLength = array.length;
    for (var outer = array; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (array[inner] > array[inner + 1]) {
                swap(array, inner, inner + 1);
            }
        }
    }
}