import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from "@angular/common";

export const homeRoute : Routes = [
    {path:'', component: HomeComponent}
]


@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
     RouterModule.forChild(homeRoute),
     CommonModule

    ],
    exports:[
      HomeComponent
    ],
    providers: []    
  })

  export class HomeModule{ };