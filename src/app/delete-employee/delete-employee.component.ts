import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.sass']
})
export class DeleteEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  @Input() employee?:Employee;
  constructor(private employeeService: EmployeeService, private location:Location) {

  }
  ngOnInit(): void {
   this.getEmployee();
  }
  goBack(): void {
    this.location.back();
  }
  getEmployee():void{
    this.employeeService.getEmployees().subscribe(employees=>this.employees=employees);
  }
  deleteEmployee(employee:Employee):void{
    this.employeeService.deleteEmployee(employee).subscribe(()=>this.goBack());
  }
}
