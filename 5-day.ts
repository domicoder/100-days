const originalArray: readonly number[] = [15, 9, 10, 3, 2, 4, 6, 40];

function sortAnArrayOfInteger(array: readonly number[]): number[] {
    // NOTE: slice() method creates a shallow copy of the array before
    // NOTE: sorting it to ensure that the original array
    // NOTE: (which is marked as readonly) is not mutated by the sort method
    return array.slice().sort((a, b) => a - b);
}

const sortedArray = sortAnArrayOfInteger(originalArray);

console.debug(
    '::::::::::::::::::::::::::[DEBUG-LOGGER] Sort Ascending',
    originalArray
);

console.debug('::::::::::::::::::::::::::[DEBUG-LOGGER] Original', sortedArray);
