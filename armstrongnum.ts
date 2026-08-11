let number: number = 153;
let original: number = number;
let sum: number = 0;

let digits: number = number.toString().length;

while (number > 0) {
    let rem = number % 10;
    sum += Math.pow(rem, digits);
    number = Math.floor(number / 10);
}

if (sum === original)
    console.log(original + " is an Armstrong Number");
else
    console.log(original + " is Not an Armstrong Number");
