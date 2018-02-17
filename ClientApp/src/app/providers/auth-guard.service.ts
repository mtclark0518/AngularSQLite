import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IdentityService } from './identity.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private identity: IdentityService ) { }


  // private checkAuthentication(url: string): boolean {
  //   if(!this.identity.isAuthenticated){
  //     this.identity.redirectUrl = url;
  //     this.router.navigate(['shit']);
  //     return false;
  //   }
  //   return true
  // }
  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log(_route)
    console.log(state)
    return true;
  }
}
