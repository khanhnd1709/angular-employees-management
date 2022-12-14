import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})

export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  
}
