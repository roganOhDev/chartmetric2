import {problem} from './problem';

function f(strings: string[]): string[] {
    const trimmedStrings = trimStrings(strings);
    const titleCaseStrings = makeTitleCases(trimmedStrings);

    return (titleCaseStrings.sort());
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
             console.error(s + "Cannot be a Title Case Word");
        } else {
            throw Error("Unknown Error your string is : " + s);
        }
    }

    return titleCaseWord.join(' ');
}

console.log(f(problem));
