function rotateArrayToRight(array: number[], k: number) {
    const n = array.length;
    const newArray = new Array(n);

    for (let i = 0; i < n; i++) {
        newArray[(i + k) % n] = array[i];
    }

    return newArray;
}

const positions = [0, 1, 2, 3, 4, 5, 6, 7, 10];
const k = 3;

const result = rotateArrayToRight(positions, k);

console.debug('::::::::::::::::::::::::::[DEBUG-LOGGER] K              ', k);
console.debug(
    '::::::::::::::::::::::::::[DEBUG-LOGGER] Original       ',
    positions
);
console.debug(
    '::::::::::::::::::::::::::[DEBUG-LOGGER] Rotated Array  ',
    result
);
