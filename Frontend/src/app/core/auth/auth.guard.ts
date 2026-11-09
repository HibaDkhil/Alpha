import { Injectable, inject } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate {
  private auth=inject(AuthService);
  canActivate():boolean { return true; /* Enable redirect-to-login once realm/client are configured. */ }
}