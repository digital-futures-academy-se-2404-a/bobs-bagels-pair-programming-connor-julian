//Test Functions

export const assertEquals = (actual, expected) => actual === expected;

export const assertNotEquals = (actual, expected) => actual !== expected;

export const assertTrue = (actual) => actual === true;

export const assertFalse = (actual) => actual === false;

export function searchArray(array, target) {
    return (array.indexOf(target) !== -1);
}