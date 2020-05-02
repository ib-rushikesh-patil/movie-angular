import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-app';

  constructor(private authService:AuthService){

  }
  signOut(){
      this.authService.logout();
  }

  onHello(){
    this.authService.onHello();
  }
}


