import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { UsersaveService } from '../../usersave.service';
import { Router } from '@angular/router';
import {take} from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { EventService } from '../../event.service';
import { ISubscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  categories$;
  model;
  key;
  product={};
  private eventsSubscription: ISubscription;

  constructor(private edit2:EventService,private db:AngularFireDatabase,private router:Router,private categoryService: CategoriesService , private usersaveService: UsersaveService) { 
    this.categories$=categoryService.getCategories().snapshotChanges();
    this.key=this.edit2.showId();
    console.log(this.key);
    
  }
  save(user)
  {
    if(this.key) 
    {
       this.usersaveService.update(this.key,this.product);
       this.eventsSubscription.unsubscribe();
    }
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    if (this.key)
    {
      this.eventsSubscription=this.usersaveService.get(this.key).subscribe(p => this.product = p);
      
    }
  }

}
