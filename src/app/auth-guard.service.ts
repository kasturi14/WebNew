import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs/internal/util/pipe';
import {Promise} from 'q';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot): Observable<boolean>
  {
    return this.auth.user$.pipe(map(user => {
      if(user) return true;
       
      this.router.navigate(['/login'], {queryParams: {returnUrl : state.url}});
      return false;
    }));

  }
}