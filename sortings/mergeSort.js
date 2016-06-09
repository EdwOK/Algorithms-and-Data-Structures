'use strict';

/**
 * 
 */
function mergeSort(array) {
    var length = array.length;
    if (length < 2) {
        return array;
    }

    var middle = Math.floor(length / 2),
        leftPart = array.slice(0, middle),
        rightPart = array.slice(middle);
        
    return merge(leftPart, rightPart); 
}

/**
 * 
 */
function merge(leftPart, rightPart) {
    var result = [],
        left = 0, 
        right = 0;

    while (left < leftPart.length && right < right.length) {
        if (leftPart[left] < rightPart[right]) {
            result.push(leftPart[left++]);
        } else {
            result.push(rightPart[right++]);
        }
    }

    return result.concat(leftPart.slice(left)).concat(rightPart.slice(right));
}