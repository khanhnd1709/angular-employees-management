import { Component,Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  constructor(
    // private employee: Employee,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  goBack(): void {
    this.location.back();
  }

  getHeroes(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  add(fullName: string, dob: string, phone: string, homeTown: string, university: string): void {
    fullName = fullName.trim();
    if (!fullName) { return; }
    this.employeeService.addEmployee({ fullName, dob, phone, homeTown, university } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
        this.goBack();
      });
  }
}
