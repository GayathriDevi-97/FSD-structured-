let str: string = "programming";

let result: string = [...new Set(str)].join("");

console.log("After removing duplicates:", result);
