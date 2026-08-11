function factorial(num: number): number {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

let num: number = 145;
let original: number = num;
let sum: number = 0;

while (num > 0) {
    let rem = num % 10;
    sum += factorial(rem);
    num = Math.floor(num / 10);
}

if (sum === original)
    console.log(original + " is a Strong Number");
else
    console.log(original + " is Not a Strong Number");
