import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthHelper } from '../../auth/helper/auth.helper';

@Injectable()
export class Interceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (AuthHelper.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${AuthHelper.getToken().idToken}`
                }
            });
        }
        return next.handle(request);
    }
}
