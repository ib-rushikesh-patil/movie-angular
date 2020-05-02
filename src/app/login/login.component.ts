import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted  =  false;
  user = new User;
  constructor(private authService:AuthService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authForm  =  this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  signIn(){
    console.log(this.authForm.value);
    this.user.username=this.authForm.value.userName;
    this.user.pass=this.authForm.value.password;
    this.authService.signIn(this.user);
  }
}
