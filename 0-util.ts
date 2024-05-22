export function measureExecutionTime<T>(
    func: (array: T[]) => T[],
    array: T[]
): number {
    const start = performance.now();
    func(array);
    const end = performance.now();
    return end - start;
}

export const randomArrayNumbers1To1000000: number[] = Array.from(
    { length: 1000000 + 1 },
    (_, i) => i
);

export const generateRandomNumbersFrom1To50000 = (): number[] => {
    const array: number[] = [];
    for (let i = 0; i < 50000; i++) {
        array.push(Math.floor(Math.random() * 50000) + 1);
    }
    return array;
};
