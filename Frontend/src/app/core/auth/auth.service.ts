import { Injectable } from '@angular/core';
import Keycloak, { KeycloakInstance } from 'keycloak-js';
import { environment } from '../../../environments/environment';
@Injectable({providedIn:'root'})
export class AuthService {
  private keycloak: KeycloakInstance = new Keycloak(environment.keycloak);
  async initialize(): Promise<void> {
    try { await this.keycloak.init({onLoad:'check-sso',pkceMethod:'S256',checkLoginIframe:false}); }
    catch (e) { console.warn('Keycloak is not configured yet; see Frontend README.',e); }
  }
  get isAuthenticated(): boolean { return !!this.keycloak.authenticated; }
  get username(): string { return this.keycloak.tokenParsed?.['preferred_username'] ?? 'EcoCollect user'; }
  get roles(): string[] { return this.keycloak.tokenParsed?.['realm_access']?.['roles'] ?? []; }
  async login(): Promise<void> { await this.keycloak.login(); }
  async logout(): Promise<void> { await this.keycloak.logout({redirectUri:window.location.origin}); }
  async getToken(): Promise<string|undefined> {
    if (!this.keycloak.authenticated) return undefined;
    try { await this.keycloak.updateToken(30); return this.keycloak.token; } catch { return undefined; }
  }
  hasAnyRole(required:string[]):boolean { return required.some(r=>this.roles.includes(r)); }
}