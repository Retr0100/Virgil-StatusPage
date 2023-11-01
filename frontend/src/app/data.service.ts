import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://127.0.0.1:8000/api/status/';

  constructor(private http: HttpClient) { }

  getWeek(){
    return this.http.get(this.apiUrl + "7");
  }

  getYear(){
    return this.http.get(this.apiUrl + "12");
  }

}
