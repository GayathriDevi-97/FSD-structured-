class Student {
    id: number;
    name: string;
    course: string;
    constructor(id: number, name: string, course: string) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    display(): void {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
        console.log("Course:", this.course);
    }
}
const student1 = new Student(101, "Alice", "TypeScript");
const student2 = new Student(102, "Bob", "Angular");
student1.display();

console.log("----------------");

student2.display();