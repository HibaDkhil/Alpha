import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
@Component({
 selector:'app-main-layout',standalone:true,imports:[RouterOutlet,RouterLink,RouterLinkActive],
 template:`<div class="shell"><aside class="sidebar">
 <a class="brand" routerLink="/dashboard"><b>E</b><span>EcoCollect<small>SMART WASTE PLATFORM</small></span></a>
 <label>WORKSPACE</label><nav>
 <a routerLink="/dashboard" routerLinkActive="active">▦ &nbsp; Overview</a>
 <a routerLink="/reports" routerLinkActive="active">⌖ &nbsp; Reports</a>
 <a routerLink="/collections" routerLinkActive="active">♧ &nbsp; Collections</a>
 <a routerLink="/recycling-centers" routerLinkActive="active">♻ &nbsp; Recycling centers</a>
 <a routerLink="/campaigns" routerLinkActive="active">◎ &nbsp; Campaigns</a>
 <a routerLink="/rewards" routerLinkActive="active">✧ &nbsp; Eco rewards</a>
 <a routerLink="/impact" routerLinkActive="active">↗ &nbsp; Environmental impact</a></nav>
 <button (click)="login()">Sign in with Keycloak</button></aside>
 <main><header><span>EcoCollect / Community workspace</span><b>{{auth.username}}</b></header><router-outlet /></main></div>`,
 styles:[`.shell{min-height:100vh;display:grid;grid-template-columns:245px 1fr}.sidebar{background:#123f32;color:#eaf4ee;padding:24px 17px;display:flex;flex-direction:column}.brand{display:flex;gap:10px;align-items:center;font:800 18px Manrope,sans-serif;margin:4px 5px 45px}.brand b{background:#a8d7b8;color:#123f32;border-radius:10px;padding:8px 12px}.brand small{display:block;font:600 8px 'DM Sans';letter-spacing:.1em;color:#9fbaad}.sidebar label{font-size:10px;color:#9fbaad;margin:0 10px 12px}nav{display:grid;gap:5px}nav a{padding:12px;border-radius:8px;color:#c5d9ce;font-size:13px}nav a.active,nav a:hover{background:#245c48;color:white}.sidebar button{margin-top:auto;border:0;border-radius:9px;padding:11px;background:#d6eddd;color:#174b39;font-weight:700;cursor:pointer}main{min-width:0}header{height:65px;background:white;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 30px;font-size:12px}@media(max-width:750px){.shell{grid-template-columns:1fr}.sidebar{padding:15px}.brand{margin:0 0 15px}nav{grid-template-columns:repeat(2,1fr)}.sidebar button{margin-top:15px}header{padding:0 16px}}`]
})
export class MainLayoutComponent { auth=inject(AuthService); login():void{void this.auth.login();} }