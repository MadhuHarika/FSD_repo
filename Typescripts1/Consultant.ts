
import { v4 as uuidv4 } from 'uuid';
import {Employee} from "./Employee";
import {Specialization} from "./Specialization";

export class Consultant extends Employee {
    private hourly_amount: number;
    private specialization: Specialization;

    constructor (employeeId:any, employeeName:string, departmentName:string, designation:number,hourly_amount:number,specialization:Specialization) {
        super(employeeId,employeeName,departmentName,designation);
        // super.createEmployee();
        // super.displayEmployeeDetails();
        this.hourly_amount =hourly_amount;
        this.specialization = specialization;
    }

    createEmployee(employeeId:any, employeeName:string, departmentName:string, designation) {
        this.employeeId = employeeId;
        this.employeeName=employeeName;
        this.departmentName=departmentName;
        this.designation=designation;
        this.hourly_amount=Number(this.x);
        this.specialization=this.specialization;

    }
    displayEmployeeDetails() {
        console.log(`${this.employeeId} ${this.employeeName} ${this.departmentName} ${this.designation} ${this.hourly_amount} ${this.specialization}`);
    }

    get x(): string {
        return this.x;
    }

    set x(hourly_amount:number) {
        this.hourly_amount=hourly_amount;
    }
}


