import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddMapsFormComponent } from './components/add-maps-form/add-maps-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MapDetailComponent } from './components/map-detail/map-detail.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureCardsComponent } from './components/feature-cards/feature-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddMapsFormComponent,
    DashboardComponent,
    TableComponent,
    StatisticsComponent,
    MapDetailComponent,
    LandingPageComponent,
    FooterComponent,
    FeatureCardsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
