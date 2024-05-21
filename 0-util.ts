export function measureExecutionTime<T>(
    func: (array: T[]) => T[],
    array: T[]
): number {
    const start = performance.now();
    func(array);
    const end = performance.now();
    return end - start;
}
