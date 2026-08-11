function display<T>(value: T): T {
    return value;
}

console.log(display<number>(50));
console.log(display<string>("TypeScript"));
console.log(display<boolean>(true));
