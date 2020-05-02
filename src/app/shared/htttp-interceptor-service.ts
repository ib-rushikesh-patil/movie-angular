import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class HTTPTokenInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthService) { }

   // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
     //   const re = "login";
     //   var TOKEN_HEADER_KEY='Authorization';
     //   let authReq = request;
     //   if (request.url.search(re) === -1 ) {
     //       const token = this.authenticationService.getJwtToken();
       //     if (token) {
                // request = request.clone({
                //     setHeaders: { 
                //         Authorization: `Bearer ${token}`
                //     }
                // });

    //            authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    //        }
    //    }
     //   return next.handle(authReq);



        intercept(req: HttpRequest<any>, next: HttpHandler) {
            let authReq = req;

            var TOKEN_HEADER_KEY='Authorization';
            var token =this.authenticationService.getJwtToken();
            if (req.url.search("login") == -1 ) {

                authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) ,
                               
                });
                
            }
            return next.handle(authReq);
          }
    
    
}