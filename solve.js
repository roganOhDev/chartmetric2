"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const problem_1 = require("./problem");
function f(strings) {
    const trimmedStrings = trimStrings(strings);
    const titleCaseStrings = makeTitleCases(trimmedStrings);
    return (titleCaseStrings.sort());
}
function trimStrings(strings) {
    return strings.map(s => s.trim());
}
function makeTitleCases(s) {
    return s.map(s => makeTitleCase(s));
}
function makeTitleCase(s) {
    const words = s.split(' ');
    let titleCaseWord = [];
    try {
        titleCaseWord = words.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase());
    }
    catch (e) {
        if (e instanceof TypeError) {
            console.error(s + "Cannot be Title Case Word");
        }
        else {
            throw Error("Unknown Error your string is : " + s);
        }
    }
    return titleCaseWord.join(' ');
}
console.log(f(problem_1.problem));
