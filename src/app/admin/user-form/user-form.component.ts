import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { UsersaveService } from '../../usersave.service';
import { Router } from '@angular/router';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  categories$;
  model;

  constructor(private router:Router,private categoryService: CategoriesService , private usersaveService: UsersaveService) { 
    this.categories$=categoryService.getCategories().snapshotChanges();
   
  }
  save(user)
  {
    console.log(user);
    this.router.navigate(['/admin/products']);
    return this.usersaveService.create(user);
   
   
  }

  ngOnInit() {
    
  }

}
