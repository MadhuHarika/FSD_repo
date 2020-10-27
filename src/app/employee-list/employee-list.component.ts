import { Component, OnInit } from '@angular/core';
import { Consultantemployee } from './consultantemployee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  salesPersonList: SalesPerson[] = [
    new SalesPerson(1,'Anup', 'Kumar', 'anup.kumar@luv2code.com', 50000),
    new SalesPerson(2, 'John', 'Doe', 'john.doe@luv2code.com', 40000),


  ngOnInit(): void {
  }

}
