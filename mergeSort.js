"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
function mergeSort(strings, left, right) {
    if (left >= right) {
        return [strings[left]];
    }
    const mid = Math.floor((right + left) / 2);
    mergeSort(strings, left, mid);
    mergeSort(strings, mid + 1, right);
    merge(strings, left, mid, right);
    return strings;
}
exports.mergeSort = mergeSort;
function merge(strings, left, mid, right) {
    let leftCursor = left;
    let rightCursor = mid + 1;
    const newArr = [];
    let newArrCursor = left;
    while (leftCursor <= mid && rightCursor <= right) {
        if (strings[leftCursor] < strings[rightCursor]) {
            newArr[newArrCursor++] = strings[leftCursor++];
        }
        else {
            newArr[newArrCursor++] = strings[rightCursor++];
        }
    }
    while (leftCursor <= mid) {
        newArr[newArrCursor++] = strings[leftCursor++];
    }
    while (rightCursor <= right) {
        newArr[newArrCursor++] = strings[rightCursor++];
    }
    for (let i = left; i <= right; i++) {
        strings[i] = newArr[i];
    }
}
