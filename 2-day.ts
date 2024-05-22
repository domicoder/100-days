import {
    generateRandomNumbersFrom1To50000,
    measureExecutionTime,
    randomArrayNumbers1To1000000,
} from './0-util';

function findMaximumElement(array: number[]): number[] {
    return [array.reduce((max, current) => Math.max(max, current))];
}

function assetOneWith1To1000000() {
    console.log(
        'findMaximumElement 1To1000000: ',
        findMaximumElement(randomArrayNumbers1To1000000)
    );

    const executionTime1 = measureExecutionTime(
        findMaximumElement,
        randomArrayNumbers1To1000000
    );
    console.log(`1. findMaximumElement execution time: ${executionTime1} ms\n`);
}

function assetTwoWith1To50000() {
    console.log(
        'findMaximumElement 1to50,000: ',
        findMaximumElement(generateRandomNumbersFrom1To50000())
    );

    const executionTime1 = measureExecutionTime(
        findMaximumElement,
        randomArrayNumbers1To1000000
    );
    console.log(`2. findMaximumElement execution time: ${executionTime1} ms\n`);
}

function assertThreeWithRandoms() {
    const randoms = [1, 55, 100, 500, 300, 40, 44];
    console.log(
        'findMaximumElement from Randoms numbers: ',
        findMaximumElement(randoms)
    );

    const executionTime2 = measureExecutionTime(findMaximumElement, randoms);
    console.log(`3. findMaximumElement execution time: ${executionTime2} ms\n`);
}

assetOneWith1To1000000();
assetTwoWith1To50000();
assertThreeWithRandoms();
