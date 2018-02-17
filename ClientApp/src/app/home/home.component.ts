import { Component } from '@angular/core';
import { IdentityService } from '../providers/identity.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  email: string = ''
  password: string = ''

  constructor( private request: IdentityService){}


  handleIdentityRequest(type){
    type === 'login' ? this.login() : this.register()
  }
  login(){
    this.request.login(this.email, this.password)
  }
  register(){
    this.request.registration(this.email, this.password)
  }
}
