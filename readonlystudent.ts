class Student {
    readonly studentId: number;
    name: string;

    constructor(id: number, name: string) {
        this.studentId = id;
        this.name = name;
    }

    display(): void {
        console.log(this.studentId, this.name);
    }
}

const student = new Student(101, "Rahul");
student.display();
