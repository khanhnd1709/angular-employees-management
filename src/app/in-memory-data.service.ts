import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 1,
        fullName: "Nguyễn Duy Khanh",
        dob: "17/09/2000",
        phone: "0888888888",
        homeTown: "HCM",
        university: "TDTU"
      },
      {
        id: 2,
        fullName: "Ngô Anh Tú",
        dob: "12/05/2000",
        phone: "0888888888",
        homeTown: "HCM",
        university: "TDTU"
      },
      {
        id: 3,
        fullName: "Dương Bá Cường",
        dob: "20/10/2000",
        phone: "0888888888",
        homeTown: "HCM",
        university: "TDTU"
      },
      {
        id: 4,
        fullName: "Nguyễn Bình Oánh",
        dob: "02/01/2000",
        phone: "0888888888",
        homeTown: "HCM",
        university: "TDTU"
      },
      {
        id: 5,
        fullName: "Nguyễn Bình Oánh",
        dob: "02/01/2000",
        phone: "0888888888",
        homeTown: "HCM",
        university: "TDTU"
      },
      {
        id: 6,
        fullName: "Nguyễn Bình Oánh",
        dob: "02/01/2000",
        phone: "0888888888",
        homeTown: "HCM",
        university: "TDTU"
      }
    ];
    return { employees };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employees => employees.id)) + 1 : 11;
  }
}