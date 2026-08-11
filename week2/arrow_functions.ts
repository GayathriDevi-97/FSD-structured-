function add(a: number, b: number): number {
    return a + b;
}

console.log("Traditional Function:", add(10, 20));
const addArrow = (a: number, b: number): number => {
    return a + b;
};

console.log("Arrow Function (Full Form):", addArrow(10, 20));
const addShort = (a: number, b: number): number => a + b;

console.log("Arrow Function (Shorthand):", addShort(10, 20));
function square(num: number): number {
    return num * num;
}

console.log("Traditional:", square(5));
const squareArrow = (num: number): number => {
    return num * num;
};

console.log("Arrow Full Form:", squareArrow(5));
const squareShort = (num: number): number => num * num;

console.log("Arrow Shorthand:", squareShort(5));
function greet(name: string): string {
    return "Hello " + name;
}

console.log(greet("John"));
const greetArrow = (name: string): string => {
    return "Hello " + name;
};

console.log(greetArrow("John"));
const greetShort = (name: string): string => "Hello " + name;

console.log(greetShort("John"));