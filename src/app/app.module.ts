import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminGuardService } from './admin-guard.service';
import { UserFormComponent } from './admin/user-form/user-form.component';
import {CategoriesService} from './categories.service';
import { UsersaveService } from './usersave.service';
import { CustomFormsModule} from 'ng2-validation';
import { RegisterComponent } from './register/register.component';
import { RegistersaveService } from './registersave.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {EventService} from './event.service';
import { AboutComponent } from './about/about.component';
import { AdminRegisteredComponent } from './admin/admin-registered/admin-registered.component';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    AdminProductsComponent,
    LogoutComponent,
    UserFormComponent,
    RegisterComponent,
    AdminLoginComponent,
    AboutComponent,
    AdminRegisteredComponent
  
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'' ,component:HomeComponent},
      {path:'products', component: ProductsComponent},
      {path:'register', component:RegisterComponent},
      {path: 'shopping-cart', component:ShoppingCartComponent},
      {path:'admin/products/new', component:UserFormComponent, canActivate: [AuthGuardService , AdminGuardService]},
      {path:'admin/products/:id', component:UserFormComponent, canActivate: [AuthGuardService , AdminGuardService]},
      {path:'admin/products', component:AdminProductsComponent, canActivate: [AuthGuardService , AdminGuardService]},
      {path:'admin/login' , component:AdminLoginComponent},
      {path:'admin/registered_users' , component:AdminRegisteredComponent , canActivate:[AuthGuardService,AdminGuardService]},
      {path:'logout' , component:LogoutComponent},
      {path:'about' , component:AboutComponent},
    ])
  ],
  providers: [AuthService, AuthGuardService , UserService, AdminGuardService, CategoriesService,UsersaveService,RegistersaveService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
