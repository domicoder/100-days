/*

Write a function that takes an array of numbers and returns a string with the phone number mask.

Examples:

Testing: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] ==> "(123) 456-7890"
Testing: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] ==> "(111) 111-1111"

However, the arrays can have varying lengths, not just limited to 10. You need to ensure that the array has 10 elements.

*/

function createPhoneNumber(numbers: number[]): string {
    // [1,2,3,4,5,6,7,8,9,0] ==> "(123) 456-7890"
    // [1,1,1,1,1,1,1,1,1,1] ==> "(111) 111-1111"

    // 1. Define optimized algorithm to store input
    // 2. ensure we are receiving an array with length 10

    // 0-0  convert numbers array to string
    // 0-1. chunk with slice in 3 parts
    // 0-2  apply algorithm for each element (3, that are saved in an array)

    // characters position 1,5,6,10

    // Guard to ensure 10 elements in array
    if (numbers.length > 10 || numbers.length < 10) {
        throw new Error(
            `Provide an array only with 10 numbers. You have ${numbers.length} elements.`
        );
    }

    let phoneNumberString = numbers.join('');
    let phoneNumberDraft = [];

    for (let i = 0; i < 3; i++) {
        if (i === 0)
            phoneNumberDraft.push(`(${phoneNumberString.slice(0, 3)})`);
        if (i === 1) phoneNumberDraft.push(` ${phoneNumberString.slice(3, 6)}`);
        if (i === 2)
            phoneNumberDraft.push(`-${phoneNumberString.slice(6, 10)}`);
    }

    const phoneNumber = phoneNumberDraft.join('');

    return phoneNumber;
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const numberTemp = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

console.log(`Phone Number Mask: ${createPhoneNumber(number)}`);
console.log(`Phone Number Mask: ${createPhoneNumber(numberTemp)}`);
