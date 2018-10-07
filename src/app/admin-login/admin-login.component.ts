import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent{
  constructor(private user1:UserService) { }

  check(username,password)
  {
    if(username == "xyz" && password=="123")
    {
      firebase.database().ref('/users/'+this.user1.key+'/isAdmin').set(true);
    }
  }

}
