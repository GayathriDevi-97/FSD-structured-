class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }
}

const numberBox = new Box<number>(100);
numberBox.display();

const stringBox = new Box<string>("Hello TypeScript");
stringBox.display();

const booleanBox = new Box<boolean>(true);
booleanBox.display();
