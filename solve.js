"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const problem_1 = require("./problem");
const mergeSort_1 = require("./mergeSort");
function f(strings) {
    const trimmedStrings = trimStrings(strings);
    const titleCaseStrings = makeTitleCases(trimmedStrings);
    return (0, mergeSort_1.mergeSort)(titleCaseStrings, 0, titleCaseStrings.length - 1);
    // return (titleCaseStrings.sort());
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
            throw Error("Cannot change into Title Case Word : " + s);
        }
        else {
            throw Error("Unknown Error your string is : " + s);
        }
    }
    return titleCaseWord.join(' ');
}
console.log(f(problem_1.problem));
