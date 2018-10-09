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

  get(productId:string)
  {
    return this.db.object('/usersave/'+productId).valueChanges();
  }

  update(eventId,event)
  {
    return this.db.object('/usersave/'+eventId).update(event);
  }

  delete(productId){
    return this.db.object('/usersave/'+ productId).remove();
  }
}