let start: number = 10;
let end: number = 50;

console.log("Prime Numbers:");

for (let num = start; num <= end; num++) {
    let prime = true;

    if (num < 2) continue;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(num);
    }
}
