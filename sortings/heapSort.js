'use strict';

/**
 * 
 */
function heapSort(array) {
    var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

    for (var g = 0; g < gaps.length; ++g) {
        for (var i = gaps[g]; i < array.length; ++i) {
            var temp = array[i];

            for (var j = i; j >= gaps[g] && array[j - gaps[g]] > temp; j -= gaps[g]) {
                array[j] = array[j - gaps[g]];
            }
    
            array[j] = temp;
        }
    }
}