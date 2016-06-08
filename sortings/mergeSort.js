'use strict';

/**
 * 
 */
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    var middle = Math.floor(array.length / 2);
    var leftPart = mergeSort(array.slice(0, middle)) || [];
    var rightPart = mergeSort(array.slice(middle, array.length)) || [];
    return merge(leftPart, rightPart); 
}

/**
 * 
 */
function merge(leftPart, rightPart) {
    var result = [];
    var i = 0, j = 0;

    while (i < leftPart.length && j < right.length) {
        if (leftPart[i] < rightPart[j]) {
            result.push(leftPart[i++]);
        } else {
            result.push(rightPart[j++]);
        }
    }

    return result.concat(leftPart.slice(i)).concat(rightPart.slice(j));
}