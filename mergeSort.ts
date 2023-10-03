export function mergeSort(strings: string[], left: number, right: number): string[] {
    if (left >= right) {
        return [strings[left]];
    }

    const mid = Math.floor((right + left) / 2);
    mergeSort(strings, left, mid);
    mergeSort(strings, mid + 1, right);

    merge(strings, left, mid, right);

    return strings;
}

function merge(strings: string[], left: number, mid: number, right: number): void {
    let leftCursor = left;
    let rightCursor = mid + 1;
    const newArr: string[] = [];
    let newArrCursor = left;

    while (leftCursor <= mid && rightCursor <= right) {
        if (strings[leftCursor] < strings[rightCursor]) {
            newArr[newArrCursor++] = strings[leftCursor++];

        } else {
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
