function welcome(): void {
    console.log("Welcome to TypeScript");
}
function display(name: string, age: number): void {
    console.log("Name:", name);
    console.log("Age:", age);
}
function add(a: number, b: number): number {
    return a + b;
}
function getMessage(): string {
    return "Learning TypeScript Functions";
}
welcome();
display("Rahul", 20);
let sum: number = add(10, 20);
console.log("Sum:", sum);
let message: string = getMessage();
console.log(message);