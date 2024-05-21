import { measureExecutionTime } from './0-util';

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

// Range large array for testing
const testArray: number[] = Array.from({ length: 1000000 }, (_, i) => i);

console.log('reversedArray: ', testArray);

// Measure the execution time of reverseArray1
const executionTime1 = measureExecutionTime(reverseArray1, testArray);
console.log(`reverseArray1 execution time: ${executionTime1} ms`);

// Measure the execution time of reverseArray2
const executionTime2 = measureExecutionTime(reverseArray2, testArray);
console.log(`reverseArray2 execution time: ${executionTime2} ms`);
