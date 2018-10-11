import { Component, OnInit } from '@angular/core';
import { UsersaveService } from '../../usersave.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operator/take';
import { EventService } from '../../event.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {


  productRef: AngularFireList<any>;
  products$: Observable<any[]>;

  constructor(private route:Router,private usersave1: UsersaveService,private db:AngularFireDatabase,private edit1:EventService) {

    this.productRef = db.list('/usersave');
    this.products$ = this.productRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() 
    }));
    
    });

  }

  delete(key)
  {
    if (!confirm('Are you sure you want to delete this event?')) return;

    this.usersave1.delete(key);
    this.route.navigate(['/admin/products']);
  }

  edit(key)
  {
    this.edit1.setid(key);
    this.route.navigate(['/admin/products/',key]);
  }

  unsubs()
  {
    this.route.navigate(['/admin/products/new']);
  }
ngOnInit()
{}
}