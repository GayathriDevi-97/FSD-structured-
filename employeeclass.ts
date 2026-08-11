class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    display(): void {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Department:", this.department);
    }
}

const emp = new Manager("Amit", 50000, "IT");
console.log(emp.name);
emp.showDepartment();
