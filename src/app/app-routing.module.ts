import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitCodeComponent } from './digit-code/digit-code.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { AppSettingComponent } from './linker/app-setting/app-setting.component';
import { AttendenceComponent } from './linker/attendence/attendence.component';
import { DashboardComponent } from './linker/dashboard/dashboard.component';
import { GardenersComponent } from './linker/gardeners/gardeners.component';
import { InventoryComponent } from './linker/inventory/inventory.component';
import { NurseriesComponent } from './linker/nurseries/nurseries.component';
import { ReportsComponent } from './linker/reports/reports.component';
import { SpeciesComponent } from './linker/species/species.component';
import { UserManagementComponent } from './linker/user-management/user-management.component';
import { LoginComponent } from './login/login.component';
import { LinkerComponent } from './linker/linker.component';
import { AddspeciesComponent } from './linker/species/addspecies/addspecies.component';
import { SuccessRatioComponent } from './linker/species/success-ratio/success-ratio.component';
import { IndividualComponent } from './linker/sapling-requests/individual/individual.component';
import { OrganizationContrComponent } from './linker/sapling-requests/organization-contr/organization-contr.component';
import { OrganizationNonComponent } from './linker/sapling-requests/organization-non/organization-non.component';
import { AuthGuardGuard } from './auth-guard.guard';



const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },

  {
    path: 'login', component: LoginComponent
  },
  {

    path: 'linker', component: LinkerComponent, canActivate:[AuthGuardGuard],
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {

        path: 'sapling-requests',
        children:[
          {
            path:'',component:IndividualComponent

          },
          {

            path:'individual',component:IndividualComponent
          },
          {
            path:'organization-contr',component:OrganizationContrComponent
          },
          {
            path:'organization-non',component:OrganizationNonComponent
          }
        ]
      },
      {
        path: 'inventory', component: InventoryComponent
      },
      {
        path: 'species',children: [
          {

            path:'',component:SpeciesComponent
          },
          {

            path:'success-ratio',component:SuccessRatioComponent
          },
          {
            path: 'addspecies', component: AddspeciesComponent
          },
        ]
      },
      {
        path: 'gardeners', component: GardenersComponent

      },
      {
        path: 'nurseries', component: NurseriesComponent
      },
      {
        path: 'attendence', component: AttendenceComponent
      },
      {
        path: 'user-management', component: UserManagementComponent
      },
      {
        path: 'reports', component: ReportsComponent
      },
      {
        path: 'app-setting', component: AppSettingComponent
      },

    ]
  },
  {
    path: 'ForgotPass', component: ForgotPassComponent
  },
  {
    path: 'DigitCode', component: DigitCodeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
