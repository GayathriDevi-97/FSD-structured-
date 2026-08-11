class Student {
    static college: string = "ABC College";
    readonly id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    display(): void {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
        console.log("College:", Student.college);
    }
}
const student1 = new Student(101, "Alice");
const student2 = new Student(102, "Bob");
student1.display()
console.log("----------------------");
student2.display();
console.log("College Name:", Student.college);
student1.name = "David";
console.log("Updated Name:", student1.name);
Student.college = "XYZ College";
console.log("Updated College:", Student.college);