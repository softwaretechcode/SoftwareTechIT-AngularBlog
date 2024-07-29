import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../../admin.component';
import { AdminProfileComponent } from '../../admin-components/admin-profile/admin-profile.component';
import { AdminAuthGuard } from '../../../shared/adminauth/admin-auth.guard';
import { AdminSettingsComponent } from '../../admin-components/admin-settings/admin-settings.component';
import { AddAdminComponent } from '../../admin-components/add-admin/add-admin.component';
import { EditAdminComponent } from '../../admin-components/edit-admin/edit-admin.component';
import { ViewDashComponent } from 'src/app/dashboard/dash-componets/view-dash/view-dash.component';
import { AdminDashViewComponent } from '../../admin-components/admin-dash-view/admin-dash-view.component';
import { AdminHomeComponent } from '../../admin-components/admin-home/admin-home.component';
import { ErrorPageComponent } from 'src/app/components/error-page/error-page.component';

const routes: Routes = [
  {path:'admin',component: AdminComponent ,children:[
    {path: 'profile', component: AdminProfileComponent},
    {path: 'add-admin', component: AddAdminComponent},
    {path: 'edit-admin', component: EditAdminComponent},
    {path: 'admin-settings',component:AdminSettingsComponent},
    {path:'view-dash',component:AdminDashViewComponent},
    {path:'home',component:AdminHomeComponent},
    
  ],canActivate: [AdminAuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
