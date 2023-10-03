export function mergeSort(strings: string[], left: number, right: number): string[] {
    if (!validate(strings, left, right)) {
        return strings;
    }

    const mid = Math.floor(left + (right - left) / 2);
    mergeSort(strings, left, mid);
    mergeSort(strings, mid + 1, right);

    merge(strings, left, mid, right);

    return strings;
}

function validate(strings: string[], left: number, right: number): boolean {
    if (strings.length <= 1) {
        return false
    }

    return left < right;
}

function merge(strings: string[], left: number, mid: number, right: number): void {
    const leftArrSize = mid - left + 1;
    const rightArrSize = right - mid;
    const leftArr = new Array(leftArrSize);
    const rightArr = new Array(rightArrSize);

    copyIntoDividedArray(strings, leftArr, leftArrSize, left);
    copyIntoDividedArray(strings, rightArr, rightArrSize, mid + 1);

    compareAndMerge()


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

function copyIntoDividedArray(strings: string[], newArr: string[], newArrSize: number, startIndex: number) {
    for (let i = 0; i < newArrSize; i++) {
        newArr[i] = strings[startIndex + i];
    }
}

function compareAndMerge(left: number, leftArrSize: number, rightArrSize: number, ) {
    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArrSize && j < rightArrSize) {
        if (leftArr[i] <= rightArr[j]) {
            strings[k] = leftArr[i];
            i++;
        } else {
            strings[k] = rightArr[j];
            j++;
        }
        k++;
    }
}
