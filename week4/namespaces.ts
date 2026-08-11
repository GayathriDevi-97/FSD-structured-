namespace StudentManagement {
  export class Student {
    constructor(
      public id: number,
      public name: string,
      public marks: number
    ) {}

    display(): void {
      console.log(`ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Marks: ${this.marks}`);
    }
  }
  export function getGrade(marks: number): string {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 60) return "C";
    return "D";
  }
}
const student1 = new StudentManagement.Student(101, "Rahul", 88);

student1.display();
console.log("Grade:", StudentManagement.getGrade(student1.marks));
