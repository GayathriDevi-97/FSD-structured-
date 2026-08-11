let num: number = 29;
let isPrime: boolean = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${num} is a Prime Number` : `${num} is Not a Prime Number`);