interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(item: T): void {
    console.log("Length:", item.length);
}

printLength("Hello");
printLength([1, 2, 3, 4]);
printLength({ length: 10, name: "Book" });
