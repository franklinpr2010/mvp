import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    shared : SharedService;
    constructor() { 
          this.shared = SharedService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        let authRequest : any;
        console.log('tes')
        if(this.shared.isLoggedIn()){
            console.log('tes log')
            authRequest = req.clone({
                setHeaders: {
                    'Authorization' : 'Token ' + this.shared.token || ''
                }
            });
            return next.handle(authRequest);
        } else {
            console.log('tes req')
            return next.handle(req);
        }
    }

}