import { Component, OnInit } from '@angular/core';
import { UsersaveService } from '../usersave.service';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import {Observable} from 'rxjs/Rx';


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

  constructor(route: ActivatedRoute, private usersave1: UsersaveService, private categoryService: CategoriesService) {
    usersave1.getAll().subscribe(products => this.products = products as Product[]);
    this.categories$ = categoryService.getCategories().snapshotChanges();

    route.queryParamMap.subscribe((queryParams) => {
      this.category = queryParams.get('category');
      this.filteredProducts=(this.category) ?
        this.products.filter(p => p.category === this.category):
        this.products;
    });
   }
}
