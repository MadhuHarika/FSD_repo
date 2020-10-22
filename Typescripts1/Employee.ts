export abstract class Employee {
    protected employeeId: any;
    employeeName: string;
    departmentName: string;
    designation: number;

    protected constructor(employeeId: any, employeeName: string, departmentName: string, designation: number) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.departmentName = departmentName;
        this.designation = designation;
    }

    abstract createEmployee(employeeId: any, employeeName: string, departmentName: string, designation:number);
    abstract displayEmployeeDetails();
}