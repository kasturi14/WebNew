import { Component, OnInit } from '@angular/core';
import { RegistersaveService } from '../registersave.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user.service';
import { UsersaveService } from '../usersave.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public id: string;
  public result;
  public event:string;
  public ref;
  file:File;
  constructor(private usersave:UsersaveService,private event1:EventService,private route:ActivatedRoute, private category: CategoriesService, private registersave:RegistersaveService,private db:AngularFireDatabase,private user1:UserService) { 
      
  }
  
  
  
  saveus(user)
  {
    this.ref=firebase.database().ref('registrations');
    this.result=this.ref.push(user);
    this.id=this.result.key;
    this.upload(this.result.key);
    this.event=this.event1.show();
    this.done(this.result.key,this.event);
  }


  featuredPhotoSelected(event: any)
  {
    this.file=event.target.files[0];
  }
  upload(userID)
  {
    console.log("Selected filename:" , this.file.name);
    var storageRef = firebase.storage().ref('/Images/' + this.file.name);
    var uploadTask = storageRef.put(this.file);
    uploadTask.on('state_changed', function (snapshot) {
    },
    function(error){

    },
    function()
    {
    var downloadURL=uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
    console.log(downloadURL);
    firebase.database().ref('/registrations/'+userID+'/imageURL').set(downloadURL);
    });
    
  });
    
}
done(ID,eventName)
{
  firebase.database().ref('/registrations/'+ID+'/event').set(eventName);
}
}
