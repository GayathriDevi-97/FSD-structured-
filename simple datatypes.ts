let data: any = 100;
console.log("Any value:", data);
data = "Hello TypeScript";
console.log("Any value:", data);
let input: unknown = "Welcome";
if (typeof input === "string") {
    console.log("Unknown value:", input.toUpperCase());
}
function showMessage(): void {
    console.log("This function does not return any value.");
}
showMessage();