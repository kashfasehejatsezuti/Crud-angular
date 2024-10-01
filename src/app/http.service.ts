import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from './interface/employee';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = 'http://localhost:5283';

  // HTTP Client inject to call sever api

  http = inject(HttpClient);

  constructor() {}

  //Method to send get Employee request

  getAllEmployee() {
    return this.http.get<IEmployee[]>(this.apiUrl + '/api/Employee');
  }
  
}
