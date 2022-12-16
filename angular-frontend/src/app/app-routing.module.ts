import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMapsFormComponent } from './components/add-maps-form/add-maps-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-maps', component: AddMapsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
