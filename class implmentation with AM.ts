class Student {
    public id: number;
    public name: string;
    private marks: number;
    protected course: string;
    constructor(id: number, name: string, marks: number, course: string) {
        this.id = id;
        this.name = name;
        this.marks = marks;
        this.course = course;
    }
    public display(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
        console.log("Course:", this.course);
    }
}
const student = new Student(101, "Alice", 95, "TypeScript");
console.log(student.id);
console.log(student.name);
student.display();