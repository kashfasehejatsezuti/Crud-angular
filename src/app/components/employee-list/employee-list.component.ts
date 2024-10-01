import { HttpService } from './../../http.service';
import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interface/employee';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  // show employeeList
  employeeList: IEmployee[] = [];
  httpService = inject(HttpService);
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'age',
    'phone',
    'salary',
  ];
  ngOnInit() {
    // Call the function from HttpService To get all Employee
    this.httpService.getAllEmployee().subscribe((result) => {
      console.log(result);
      this.employeeList = result;
      console.log(this.employeeList);
    });
  }
}
