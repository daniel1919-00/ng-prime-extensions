export function timeoutAsync(ms: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });
}

export function getRandomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
