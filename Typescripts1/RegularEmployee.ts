
import { v4 as uuidv4 } from 'uuid';
import {Employee} from "./Employee";

export class RegularEmployee extends Employee {
   private salary: number;
    constructor (employeeId:any, employeeName:string, departmentName:string, designation:number,salary:number) {
        super(employeeId,employeeName,departmentName,designation);
        // super.createEmployee();
        // super.displayEmployeeDetails();
        this.salary = salary;
    }

    createEmployee(employeeId:any, employeeName:string, departmentName:string, designation) {
        this.employeeId = employeeId;
        this.employeeName=employeeName;
        this.departmentName=departmentName;
        this.designation=designation;
        this.salary=Number(this.x);

    }
    displayEmployeeDetails() {
        console.log(`${this.employeeId} ${this.employeeName} ${this.departmentName} ${this.designation} ${this.salary}`);
    }

    get x(): string {
        return this.x;
    }

    set x(salary:number) {
        this.salary=salary;
    }
}


