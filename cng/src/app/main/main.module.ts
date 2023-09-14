import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './containers/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './containers/contact/contact.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
