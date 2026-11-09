import { Component } from '@angular/core';
@Component({
  standalone: true,
  template: `<section class="page-wrap">
    <div class="eyebrow">ECOCOLLECT FEATURE</div>
    <h1 class="page-title">Administration</h1>
    <p class="page-subtitle">Administrative screens for authorized EcoCollect administrators.</p>
    <article class="panel" style="margin-top:24px">
      <span class="pill">Design-stage feature</span>
      <h2>Platform administration</h2>
      <p>This area is reserved for the Platform administration. Its data will be loaded from the backend through the API Gateway.</p>
      <p><b>API Gateway:</b> <code>http://localhost:8080/api</code></p>
      <p class="muted">Replace this placeholder with API-backed lists, forms and detail views after the team finalizes the REST contracts.</p>
    </article>
  </section>`,
  styles: [`.panel h2{font:700 19px Manrope,sans-serif;margin:18px 0 10px}.panel p{font-size:13px;color:var(--muted);line-height:1.7}.panel code{font-size:11px}`]
})
export class AdminComponent {}