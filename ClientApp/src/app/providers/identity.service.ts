import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IdentityService {
  redirectUrl?: string;


  login(email, password){
    console.log('fart')
  }

  registration(email, password){
    console.log('shit')
  }




  constructor(private http: HttpClient) { }

}
