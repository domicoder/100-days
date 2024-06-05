const stringsArray: readonly string[] = [
    'elderberry',
    'fig',
    'banana',
    'honeydew',
    'date',
    'cherry',
    'apple',
    'grape',
];

function sortAnArrayOfStrings(array: readonly string[]): string[] {
    return array.slice().sort();
}

const sortedArrayString = sortAnArrayOfStrings(stringsArray);

console.debug(
    '::::::::::::::::::::::::::[DEBUG-LOGGER] [original] Sort Ascending',
    stringsArray
);

console.debug(
    '::::::::::::::::::::::::::[DEBUG-LOGGER] Sorted Ascending',
    sortedArrayString
);
