import {EmployeeList} from './employee-list';

export class Regularemployee {
  constructor(private employeeId:any,
              private firstName: string,
              private lastName:string,
              private email:string,
              private salaray:number) {
    super(employeeId,firstName,lastName,email);
  }
}
