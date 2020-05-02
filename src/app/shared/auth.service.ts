import { Injectable } from "@angular/core";
import { User } from './User.model';
import { HttpClient } from '@angular/common/http';
import { URL_CONSTANTS } from './URL_CONSTANTS.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService
{

    constructor(private http:HttpClient, 
                private router:Router){

    }
    public signIn(userData: User){
        localStorage.setItem('ACCESS_TOKEN', "access_token");

        console.log(JSON.stringify(userData));
        const req =  this.http.post(URL_CONSTANTS.LOGIN_URL,userData)
            .subscribe(
                (response: any) => {
                  console.log("Login request response CODE==="+JSON.stringify(response))
                  this.setSession(response.token);
              }, 
              (error: any) => {    
                console.log("Login request response CODE==="+JSON.stringify(error))
                  console.log("Login reuest ERORR CODE==="+error.status)
                    if (error.status === 500) {
                        alert("Backend API is down");
                    }
                              
              });   
        
      }

      private setSession(authResult) {
         localStorage.setItem('ACCESS_TOKEN', authResult);
         alert("Logged in successfully..");
         this.router.navigate(['movie-list'])
           
     }

      public isLoggedIn(){
        return localStorage.getItem('ACCESS_TOKEN') !== null;
      }
      public logout(){
        localStorage.removeItem('ACCESS_TOKEN');
      }
      public getJwtToken()
      {
        return localStorage.getItem('ACCESS_TOKEN');
      }

      public onHello()
      {
        this.http.get(URL_CONSTANTS.HELLO_URL)
        .subscribe(
          data => console.log(data),
          err => console.log(err)
        );
      }
}