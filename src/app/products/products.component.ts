import { Component, OnInit } from '@angular/core';
import { UsersaveService } from '../usersave.service';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import {Observable} from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';
import { EventService } from '../event.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  products: Product[];
  filteredProducts: Product[];
  filter:any ={};
  categories$;
  category: string;
  public event: string;

  constructor(route: ActivatedRoute, private usersave1: UsersaveService,private event1:EventService,private categoryService: CategoriesService,private db:AngularFireDatabase) {
    usersave1.getAll().subscribe(products => {this.products = products as Product[];
    

    route.queryParamMap.subscribe((queryParams) => {
      this.category = queryParams.get('category');
      this.filteredProducts=(this.category) ?
        this.products.filter(p => p.category === this.category):
        this.products;
    });
  });
    this.categories$ = categoryService.getCategories().snapshotChanges();
  }

   setval(x: string)
   {
     this.event=x;
     this.event1.setevent(this.event);
     
   }
}
