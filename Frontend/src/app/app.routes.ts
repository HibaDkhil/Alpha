import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthGuard } from './core/auth/auth.guard';
import { RoleGuard } from './core/auth/role.guard';
export const routes: Routes = [{
  path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
    {path:'',pathMatch:'full',redirectTo:'dashboard'},
    {path:'dashboard',loadComponent:()=>import('./features/dashboard/dashboard.component').then(m=>m.DashboardComponent)},
    {path:'reports',loadComponent:()=>import('./features/reports/reports.component').then(m=>m.ReportsComponent)},
    {path:'collections',loadComponent:()=>import('./features/collections/collections.component').then(m=>m.CollectionsComponent),canActivate:[RoleGuard],data:{roles:['AGENT','ADMIN']}},
    {path:'recycling-centers',loadComponent:()=>import('./features/recycling/recycling.component').then(m=>m.RecyclingComponent)},
    {path:'campaigns',loadComponent:()=>import('./features/campaigns/campaigns.component').then(m=>m.CampaignsComponent)},
    {path:'rewards',loadComponent:()=>import('./features/rewards/rewards.component').then(m=>m.RewardsComponent)},
    {path:'impact',loadComponent:()=>import('./features/impact/impact.component').then(m=>m.ImpactComponent)},
    {path:'admin',loadComponent:()=>import('./features/admin/admin.component').then(m=>m.AdminComponent),canActivate:[RoleGuard],data:{roles:['ADMIN']}}
  ]
},{path:'**',redirectTo:'dashboard'}];