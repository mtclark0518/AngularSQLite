import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class ShitService {

  baseUrl = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  getAllShits(){
    return this.http.get(`${this.baseUrl}/api/shit/shit`)
  }



}
