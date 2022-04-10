export function definePrime(number) {
    if (number < 1 || number > 1000) {
        throw 'incorrect number';
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}