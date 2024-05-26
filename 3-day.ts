import { generateRangeOfNumbers } from './0-util';

const arrayNumbers = generateRangeOfNumbers(1, 67000);

function findMinimumElement(array: number[]): number {
    return array.reduce((min, current) => Math.min(min, current));
}

console.debug(
    '::::::::::::::::::::::::::[DEBUG-LOGGER] arrayNumbers1To67000',
    arrayNumbers
);

console.log(
    '::::::::::::::::::::::::::[DEBUG-LOGGER] Last Item in <arrayNumbers>: ',
    arrayNumbers[arrayNumbers.length - 1]
);

function assetRandomNumbers1To67000() {
    console.log(
        '::::::::::::::::::::::::::[DEBUG-LOGGER] Find Minimum Element 1 to 67,000: ',
        findMinimumElement(arrayNumbers)
    );
}

assetRandomNumbers1To67000();
