import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { Observable} from 'rxjs';

import { map} from 'rxjs/operators';
import { AuthService } from './auth.service';
import { pipe } from 'rxjs/internal/util/pipe';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate()
  : Observable<boolean> 
  {
    return this.auth.appUser$
    .pipe(map(appUser => appUser.isAdmin));
  }    
}
