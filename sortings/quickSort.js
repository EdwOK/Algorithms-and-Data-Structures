'use strict';

/**
 * 
 */
function quickSort(array) {
    sort(array, 0, array.length - 1);
}

/**
 * 
 */
function sort(array, leftRange, rightRange) {
    if (leftRange < rightRange) {
        var partitionIndex = partition(array, leftRange, rightRange);
        
        sort(array, leftRange, partitionIndex - 1);
        sort(array, partitionIndex + 1, rightRange);
    }
}

/**
 * 
 */
function partition(array, leftRange, rightRange) {
    var pivot = array[Math.floor((leftRange + rightRange) / 2)];
    var storeIndex = leftRange, 
        pivotValue = array[pivot];

    swap(array, pivot, rightRange);
    for (var i = leftRange; i < rightRange; ++i) {
        if(array[i] < pivotValue) {
            swap(array, i, storeIndex);
            storeIndex++;
        }
    }
    
    swap(array, rightRange, storeIndex);
    return storeIndex;
}