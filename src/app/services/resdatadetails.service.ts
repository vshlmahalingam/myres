import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResdatadetailsService {

  constructor(private http: HttpClient) { }

  getdata() {
    let url = "http://jsonplaceholder.typicode.com/todos/"
    return this.http.get(url);
  }
}
