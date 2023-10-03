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
    const newArr: string[] = [];

    const {leftCursor, rightCursor} = compareAndMerge(strings, left, mid, right, newArr)

    mergeRemainedElements(strings, right, leftCursor, mid, rightCursor, newArr);

    for (let i = left; i <= right; i++) {
        strings[i] = newArr[i - left];
    }
}

function compareAndMerge(strings: string[], leftCursor: number, mid: number, right: number, newArr: string[]): {
    leftCursor: number,
    rightCursor: number
} {
    let rightCursor = mid + 1;

    while (leftCursor <= mid && rightCursor <= right) {
        if (strings[leftCursor] < strings[rightCursor]) {
            newArr.push(strings[leftCursor++]);

        } else {
            newArr.push(strings[rightCursor++]);
        }
    }
    return {leftCursor, rightCursor};
}

function mergeRemainedElements(strings: string[], right: number, leftCursor: number, mid: number, rightCursor: number, newArr: string[]): void {
    while (leftCursor <= mid) {
        newArr.push(strings[leftCursor++]);
    }
    while (rightCursor <= right) {
        newArr.push(strings[rightCursor++]);
    }
}
