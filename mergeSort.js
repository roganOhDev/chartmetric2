"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
function mergeSort(strings, left, right) {
    if (strings.length <= 1) {
        return strings;
    }
    if (left >= right) {
        return strings;
    }
    const mid = Math.floor(left + (right - left) / 2);
    mergeSort(strings, left, mid);
    mergeSort(strings, mid + 1, right);
    merge(strings, left, mid, right);
    return strings;
}
exports.mergeSort = mergeSort;
function merge(strings, left, mid, right) {
    const leftArrSize = mid - left + 1;
    const rightArrSize = right - mid;
    const leftArr = new Array(leftArrSize);
    const rightArr = new Array(rightArrSize);
    for (let i = 0; i < leftArrSize; i++) {
        leftArr[i] = strings[left + i];
    }
    for (let i = 0; i < rightArrSize; i++) {
        rightArr[i] = strings[mid + 1 + i];
    }
    let i = 0;
    let j = 0;
    let k = left;
    while (i < leftArrSize && j < rightArrSize) {
        if (leftArr[i] <= rightArr[j]) {
            strings[k] = leftArr[i];
            i++;
        }
        else {
            strings[k] = rightArr[j];
            j++;
        }
        k++;
    }
    while (i < leftArrSize) {
        strings[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < rightArrSize) {
        strings[k] = rightArr[j];
        j++;
        k++;
    }
}