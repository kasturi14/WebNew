import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { UsersaveService } from '../usersave.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent{
  categories1$;
  model;
  constructor(private db:AngularFireDatabase,private router:Router,private categoryService1: CategoriesService , private usersaveService: UsersaveService) { 
  this.categories1$=categoryService1.getCategories().snapshotChanges();

}

save1(user){
  this.router.navigate(['/products']);
  return this.usersaveService.create(user);
}
}