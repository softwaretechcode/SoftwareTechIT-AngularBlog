import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminProfileComponent } from "./admin-components/admin-profile/admin-profile.component";
import { AddAdminComponent } from "./admin-components/add-admin/add-admin.component";
import { EditAdminComponent } from "./admin-components/edit-admin/edit-admin.component";
import { AdminSettingsComponent } from "./admin-components/admin-settings/admin-settings.component";
import { AdminDashViewComponent } from "./admin-components/admin-dash-view/admin-dash-view.component";
import { AdminHomeComponent } from "./admin-components/admin-home/admin-home.component";
import { AdminAuthGuard } from "../shared/adminauth/admin-auth.guard";


export const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'profile', component: AdminProfileComponent },
      { path: 'add-admin', component: AddAdminComponent },
      { path: 'edit-admin', component: EditAdminComponent },
      { path: 'admin-settings', component: AdminSettingsComponent },
      { path: 'view-dash', component: AdminDashViewComponent },
      { path: 'home', component: AdminHomeComponent },

    ], canActivate: [AdminAuthGuard]
  }
];
