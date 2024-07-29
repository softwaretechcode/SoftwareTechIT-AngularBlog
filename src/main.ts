import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routes';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { AdminModule } from './app/admin/admin.module';
import { DashboardModule } from './app/dashboard/dash-module/dashboard.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, ReactiveFormsModule, FormsModule, DashboardModule, AdminModule, MatCardModule, MatGridListModule, MatSidenavModule, MatButtonModule, MatIconModule, AppRoutingModule),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
