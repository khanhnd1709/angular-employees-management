import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { EmployeeRequest } from '../employeeRequest';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent implements OnInit {
  employeeRequest = new EmployeeRequest();
  constructor(
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // this.getHeroes();
    // this.employeeRequest=new EmployeeRequest('','','','','');
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    if (!this.employeeRequest.fullName) {
      return;
    }
    console.log(this.employeeRequest);
//     this.employeeRequest.dob = "2000-01-01";
    this.employeeService.addEmployee(this.employeeRequest)
      .subscribe(() => {
        this.goBack();
      });
  }
}
