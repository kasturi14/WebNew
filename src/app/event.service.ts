import { Injectable } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  finally:string;

  constructor() { }

  setevent(event: string)
  {
    this.finally=event;
  }
  show()
  {
  return this.finally;
  }
}
