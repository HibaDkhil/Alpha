import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { from, switchMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
export const authInterceptor:HttpInterceptorFn=(req,next)=>{
  const auth=inject(AuthService);
  if (!req.url.startsWith('http://localhost:8080') && !req.url.startsWith('/api')) return next(req);
  return from(auth.getToken()).pipe(switchMap(token=>next(token?req.clone({setHeaders:{Authorization:`Bearer ${token}`}}):req)));
};