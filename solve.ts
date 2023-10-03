import {problem} from './problem';
import {mergeSort} from './mergeSort';

function f(strings: string[]): string[] {
    const trimmedStrings = trimStrings(strings);
    const titleCaseStrings = makeTitleCases(trimmedStrings);

    return mergeSort(titleCaseStrings, 0, titleCaseStrings.length - 1);
    // return (titleCaseStrings.sort());
}

function trimStrings(strings: string[]): string[] {
    return strings.map(s => s.trim());
}

function makeTitleCases(s: string[]): string[] {
    return s.map(s => makeTitleCase(s));
}

function makeTitleCase(s: string): string {
    const words = s.split(' ');
    let titleCaseWord: string[] = [];

    try {
        titleCaseWord = words.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase());

    } catch (e) {
        if (e instanceof TypeError) {
            console.error("Cannot change into Title Case Word : " + s);
        } else {
            throw Error("Unknown Error your string is : " + s);
        }
    }

    return titleCaseWord.join(' ');
}

console.log(f(problem));
