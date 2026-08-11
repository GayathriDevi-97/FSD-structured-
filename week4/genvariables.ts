class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value:", this.value);
    }
}

let numBox = new Box<number>(100);
let strBox = new Box<string>("Hello");

numBox.display();
strBox.display();
