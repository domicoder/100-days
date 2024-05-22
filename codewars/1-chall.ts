/*

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.

*/

// Factory
function listOFBinaryToNumber(binaryArray: Array<number[]>) {
    for (let i = 0; i < binaryArray.length; i++) {
        const binaryToString = binaryArray[i].join('');
        const binaryStringToNumber = parseInt(binaryArray[i].join(''), 2);
        console.log(
            `Testing: [${binaryArray[i]}] ==> ${binaryToString} ==> ${binaryStringToNumber}`
        );
    }
    console.log('\n');
}

function binaryStringToNumber(binaryArray: string[]) {
    for (let i = 0; i < binaryArray.length; i++) {
        const binaryStringToArray = binaryArray[i].split('');
        const binaryStringToNumber = parseInt(binaryArray[i], 2);
        console.log(
            `Testing: [${binaryStringToArray}] ==> ${binaryArray[i]} ==> ${binaryStringToNumber}`
        );
    }
    console.log('\n');
}

function binaryArrayToNumber(binaryArray: number[]): number {
    const binaryToString = binaryArray.join('');
    const parseBinaryToNumber = parseInt(binaryToString, 2);

    return parseBinaryToNumber;
}

// Testing
const binaryArray = [
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
];

listOFBinaryToNumber(binaryArray);

const binaryStringArray = [
    '0001',
    '0010',
    '0101',
    '1001',
    '0010',
    '0110',
    '1111',
    '1011',
];

binaryStringToNumber(binaryStringArray);

const binaryInArray = [0, 0, 0, 1];

const numberParsed = binaryArrayToNumber(binaryInArray);

console.log(`\nnumberParsed: ${numberParsed}`);
