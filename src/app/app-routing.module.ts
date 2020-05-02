import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'movie-list', component: MovieListComponent,canActivate:[AuthGuard]},
  { path: 'movie-details', component: MovieDetailsComponent,canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo :'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
