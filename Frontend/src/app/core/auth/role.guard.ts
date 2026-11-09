import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({providedIn:'root'})
export class RoleGuard implements CanActivate {
  private auth=inject(AuthService); private router=inject(Router);
  canActivate(route:ActivatedRouteSnapshot):boolean {
    const roles=(route.data['roles'] as string[]|undefined)??[];
    if (!this.auth.isAuthenticated || !roles.length || this.auth.hasAnyRole(roles)) return true;
    void this.router.navigate(['/dashboard']); return false;
  }
}