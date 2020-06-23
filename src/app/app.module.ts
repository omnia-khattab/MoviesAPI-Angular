import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule}from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import{ReactiveFormsModule} from'@angular/forms';
import { TvComponent } from './tv/tv.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentNameComponent } from './component-name/component-name.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviedetailsComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    TvComponent,
    FooterComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
