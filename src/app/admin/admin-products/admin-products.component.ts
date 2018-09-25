import { Component, OnInit } from '@angular/core';
import { UsersaveService } from '../../usersave.service';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  product$;
  

  constructor(private usersave1: UsersaveService) { 
    this.product$ = this.usersave1.getAll();
    
  }
ngOnInit()
{}
}