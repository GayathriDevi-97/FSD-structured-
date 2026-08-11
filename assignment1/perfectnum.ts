let n: number = 28;
let sum: number = 0;

for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
        sum += i;
    }
}

if (sum === n)
    console.log(n + " is a Perfect Number");
else
    console.log(n + " is Not a Perfect Number");
