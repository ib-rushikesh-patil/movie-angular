import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieService } from './shared/movie-service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './shared/auth.service';
import { HTTPTokenInterceptor } from './shared/htttp-interceptor-service';
import { ErrorInterceptor } from './shared/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HomeComponent,
    MovieDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: HTTPTokenInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     MovieService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
