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
    const newArr = [];
    const { leftCursor, rightCursor } = compareAndMerge(strings, left, mid, right, newArr);
    mergeRemainedElements(strings, right, leftCursor, mid, rightCursor, newArr);
    for (let i = left; i <= right; i++) {
        strings[i] = newArr[i - left];
    }
}
function compareAndMerge(strings, leftCursor, mid, right, newArr) {
    let rightCursor = mid + 1;
    while (leftCursor <= mid && rightCursor <= right) {
        if (strings[leftCursor] < strings[rightCursor]) {
            newArr.push(strings[leftCursor++]);
        }
        else {
            newArr.push(strings[rightCursor++]);
        }
    }
    return { leftCursor, rightCursor };
}
function mergeRemainedElements(strings, right, leftCursor, mid, rightCursor, newArr) {
    while (leftCursor <= mid) {
        newArr.push(strings[leftCursor++]);
    }
    while (rightCursor <= right) {
        newArr.push(strings[rightCursor++]);
    }
}
