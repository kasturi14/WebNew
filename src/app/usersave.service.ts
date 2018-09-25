import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UsersaveService {

  constructor(private db: AngularFireDatabase) { }

  create(user){
    this.db.list('/usersave').push(user);
  }

  getAll(){
    return this.db.list('/usersave').valueChanges();
  }

}