import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { EmployeeRequest } from './employeeRequest';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'http://localhost:8080/spearteam/api/members';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    // const employees = of(EMPLOYEES);
    // return employees;
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        catchError(this.handleError<Employee[]>('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEmployee(id: number): Observable<Employee> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    // const employee = EMPLOYEES.find(h => h.id === id)!;
    // return of(employee);

    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateEmployee(employee: EmployeeRequest, id: number): Observable<any> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.put<Employee>(url, employee, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  /** POST: add the hero on the server */
  addEmployee(employee: EmployeeRequest): Observable<any> {
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
      catchError(this.handleError<any>('addEmployee'))
    );
  }

  deleteEmployee(employee: Employee): Observable<any> {
    const url = `${this.employeesUrl}/${employee.id}`;
    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      catchError(this.handleError<any>('deleteEmployee')));
  }
}
