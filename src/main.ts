import { enableProdMode, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {appRoutes} from "./app/app-routes";
import { provideRouter } from '@angular/router';
import {  provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, ReactiveFormsModule, FormsModule,  MatGridListModule, MatSidenavModule, MatIconModule),
        provideAnimations(),
        provideHttpClient(),
        provideRouter(appRoutes)

    ]
})
  .catch(err => console.error(err));
