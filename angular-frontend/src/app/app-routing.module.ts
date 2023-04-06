import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapDetailComponent } from './components/map-detail/map-detail.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AddMapsFormComponent } from './components/add-maps-form/add-maps-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MapDetailComponent },
  { path: 'add', component: AddMapsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
