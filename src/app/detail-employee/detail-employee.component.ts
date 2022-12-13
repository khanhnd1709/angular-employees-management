import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { EmployeeRequest } from '../employeeRequest';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.sass']
})
export class DetailEmployeeComponent implements OnInit {
  @Input() employee?: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // const employeeRequest = new EmployeeRequest(this.employee!.fullName, this.employee!.dob, this.employee!.phone, this.employee!.homeTown, this.employee!.university, this.employee!.email);
    
    if (this.employee) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      delete this.employee?.id;
//       this.employee.dob = "2000-01-01";
      this.employeeService.updateEmployee(this.employee, id)
        .subscribe(() => this.goBack());
    }
  }
}
