import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class HTTPTokenInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthService) { }

           intercept(request: HttpRequest<any>, next: HttpHandler) {
    
            var token =this.authenticationService.getJwtToken();
            if (request.url.search("login") ==-1) {
              console.log('INTERCEPTOR');
              // We retrieve the token, if any
             
              if (token) {              
                request = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${token}`
                  }
                });
              }
             
                              
            }
            return next.handle(request);
          }
    
    
}