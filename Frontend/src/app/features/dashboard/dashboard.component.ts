import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
 standalone:true,imports:[RouterLink],
 template:`<section class="page-wrap"><div class="eyebrow">COMMUNITY OVERVIEW</div>
 <h1 class="page-title">A cleaner city starts here.</h1>
 <p class="page-subtitle">Monitor environmental reports, collection activity and the impact of your community.</p>
 <div class="stats">
 <article class="panel"><small>Environmental reports</small><strong>—</strong><em>Report Service</em></article>
 <article class="panel"><small>Collections completed</small><strong>—</strong><em>Collection Service</em></article>
 <article class="panel"><small>Waste recycled</small><strong>—</strong><em>Recycling Service</em></article>
 <article class="panel"><small>CO₂ savings</small><strong>—</strong><em>Impact Analytics</em></article></div>
 <article class="panel"><h2>Explore EcoCollect</h2><div class="links">
 <a routerLink="/reports"><b>Report an issue</b><span>Illegal dumping, overflowing bins and pollution.</span></a>
 <a routerLink="/collections"><b>Waste collections</b><span>Pickup requests, agent assignments and progress.</span></a>
 <a routerLink="/recycling-centers"><b>Recycling centers</b><span>Find centers and accepted materials.</span></a>
 <a routerLink="/campaigns"><b>Environmental campaigns</b><span>Join local initiatives and activities.</span></a>
 <a routerLink="/rewards"><b>Eco rewards</b><span>Track points, badges and achievements.</span></a>
 <a routerLink="/impact"><b>Environmental impact</b><span>Explore recycling and CO₂ indicators.</span></a></div>
 <p class="hint">Live indicators will be displayed after the backend APIs are connected through the API Gateway.</p></article></section>`,
 styles:[`.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin:25px 0}.stats small{display:block;color:var(--muted);font-size:12px}.stats strong{display:block;font:800 28px Manrope;margin:10px 0}.stats em{font-style:normal;font-size:10px;color:#87958d}.panel h2{font:700 18px Manrope;margin:0 0 18px}.links{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.links a{border:1px solid var(--line);border-radius:10px;padding:14px;display:grid;gap:6px}.links a b{font-size:12px;color:var(--green-900)}.links a span,.hint{font-size:11px;color:var(--muted);line-height:1.6}.hint{margin:20px 0 0}@media(max-width:900px){.stats{grid-template-columns:repeat(2,1fr)}}@media(max-width:550px){.links{grid-template-columns:1fr}.page-wrap{padding:20px 15px}}`]
})
export class DashboardComponent {}