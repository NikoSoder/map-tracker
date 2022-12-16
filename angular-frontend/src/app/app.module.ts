import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AddMapsFormComponent } from './components/add-maps-form/add-maps-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapTablesComponent } from './components/map-tables/map-tables.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, AddMapsFormComponent, DashboardComponent, MapTablesComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
