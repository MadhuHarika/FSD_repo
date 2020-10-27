import {EmployeeList} from './employee-list';

export class Consultantemployee {
  constructor(private employeeId:any,
              private firstName: string,
              private lastName:string,
              private email:string,
              private hourly_pay:number) {
    super(employeeId,firstName,lastName,email);
  }
}
