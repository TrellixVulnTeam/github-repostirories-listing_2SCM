import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { HomeModule } from './home/home.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
// 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
