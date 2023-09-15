import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './containers/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './containers/contact/contact.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';



@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        SharedModule,
        HomeComponent,
        WelcomeComponent,
        ContactComponent,
        PageNotFoundComponent,
        NavigationComponent,
        LoginComponent
    ],
    exports: [
        NavigationComponent
    ]
})
export class MainModule { }
