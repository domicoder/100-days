import { measureExecutionTime, randomArrayNumbers1To1000000 } from './0-util';

// slice() creates a shallow copy of the array to avoid mutating the original array.
// reverse() method is then called on this copy to reverse the elements.
function reverseArray1<T>(array: T[]): T[] {
    return array.slice().reverse();
}

// without using the slice() and reverse()
function reverseArray2<T>(array: T[]): T[] {
    const length = array.length;
    const reversedArray: T[] = new Array(length);

    for (let i = 0; i < length; i++) {
        reversedArray[length - 1 - i] = array[i];
    }

    return reversedArray;
}

console.log('reversedArray: ', randomArrayNumbers1To1000000);

// Measure the execution time of reverseArray1
const executionTime1 = measureExecutionTime(
    reverseArray1,
    randomArrayNumbers1To1000000
);
console.log(`reverseArray1 execution time: ${executionTime1} ms`);

// Measure the execution time of reverseArray2
const executionTime2 = measureExecutionTime(
    reverseArray2,
    randomArrayNumbers1To1000000
);
console.log(`reverseArray2 execution time: ${executionTime2} ms`);
