import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-modules/admin/admin-routes';
import { AdminProfileComponent } from './admin-components/admin-profile/admin-profile.component';
import { AdminComponent } from './admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddAdminComponent } from './admin-components/add-admin/add-admin.component';
import { EditAdminComponent } from './admin-components/edit-admin/edit-admin.component';
import { AdminSettingsComponent } from './admin-components/admin-settings/admin-settings.component';
import { AdminDashViewComponent } from './admin-components/admin-dash-view/admin-dash-view.component';
import { AdminHomeComponent } from './admin-components/admin-home/admin-home.component';


@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        AdminRoutingModule,
        AdminProfileComponent,
        AddAdminComponent,
        EditAdminComponent,
        AdminSettingsComponent,
        AdminDashViewComponent,
        AdminHomeComponent
    ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }
