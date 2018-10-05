import { Component, OnInit } from '@angular/core';
import { RegistersaveService } from '../registersave.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent{
  registrations$;
  constructor(private register:RegistersaveService) { 

    this.registrations$=register.getAll();
  }
}
