import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import {ProductsService} from './services/products.service';
import { ProductComponent } from './components/product/product.component';

const appRoutes:Routes = [
  {path:"",component:ProfileComponent},
  {path:"profile",component:ProfileComponent},
  {path:"product",component:ProductComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
