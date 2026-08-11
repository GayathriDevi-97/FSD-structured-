let arr: number[] = [1, 2, 3, 2, 4, 5, 1, 6];

let seen = new Set<number>();
let duplicates = new Set<number>();

for (let num of arr) {
    if (seen.has(num)) {
        duplicates.add(num);
    } else {
        seen.add(num);
    }
}

console.log("Duplicate Elements:", [...duplicates]);
