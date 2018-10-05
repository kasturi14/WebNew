import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { AppUser } from './models/app-user';
import {AngularFireObject} from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public key:string;
  constructor(private db: AngularFireDatabase) { }

   
  save(user: firebase.User)
   {
     this.db.object('/users/' + user.uid).update({
       name: user.displayName,
       email: user.email
     });
     this.key=user.uid;
     console.log(user.uid);


    }
    get(uid: string): AngularFireObject<AppUser>
    {
      return this.db.object('/users/' + uid);
    }
}
