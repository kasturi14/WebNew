import { Injectable } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  finally:string;
  edit:string;

  constructor() { }

  setevent(event: string)
  {
    this.finally=event;
  }
  show()
  {
  return this.finally;
  }

  setid(editId: string)
  {
    this.edit=editId;
  }

  showId()
  {
    return this.edit;
  }
}
