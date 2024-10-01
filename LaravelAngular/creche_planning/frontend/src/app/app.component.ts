import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
