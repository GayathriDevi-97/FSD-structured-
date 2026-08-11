let studentName: string = "Rahul";
let age: number = 20;
let isStudent: boolean = true;
function displayInfo(name: string, age: number): void {
    console.log("Name:", name);
    console.log("Age:", age);
}
function add(a: number, b: number): number {
    return a + b;
}
displayInfo(studentName, age);

let total: number = add(10, 20);
console.log("Total:", total);
console.log("Student:", isStudent);