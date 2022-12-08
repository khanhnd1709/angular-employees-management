import { Component,Input } from '@angular/core';
import { Location } from '@angular/common';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent {
  employee=new Employee(1,'','','','','');
  constructor(
    // private employee: Employee,
    private employeeService: EmployeeService,
    private location: Location,
  ) { }
  goBack(): void {
    this.location.back();
  }

  add(): void {
    if(this.employee){
      this.employeeService.addEmployee(this.employee).subscribe(() => this.goBack());

    }
  }
}
