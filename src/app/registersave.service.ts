import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RegistersaveService {

  constructor(private db:AngularFireDatabase) { }


  create(user){
    this.db.list('/registrations').push(user);
  }


  getAll(){
    return this.db.list('/registrations').valueChanges();
  }
}
