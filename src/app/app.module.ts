import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { RowEmployeeComponent } from './row-employee/row-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    RowEmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
