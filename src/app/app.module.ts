import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { DigitCodeComponent } from './digit-code/digit-code.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { SpeciesComponent } from './linker/species/species.component';
import { DashboardComponent } from './linker/dashboard/dashboard.component';
import { LinkerComponent } from './linker/linker.component';
import { SaplingRequestsComponent } from './linker/sapling-requests/sapling-requests.component';
import { InventoryComponent } from './linker/inventory/inventory.component';
import { GardenersComponent } from './linker/gardeners/gardeners.component';
import { NurseriesComponent } from './linker/nurseries/nurseries.component';
import { AttendenceComponent } from './linker/attendence/attendence.component';
import { UserManagementComponent } from './linker/user-management/user-management.component';
import { ReportsComponent } from './linker/reports/reports.component';
import { AppSettingComponent } from './linker/app-setting/app-setting.component';
import { AddspeciesComponent } from './linker/species/addspecies/addspecies.component';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { HttpClientModule } from '@angular/common/http';
import { SuccessRatioComponent } from './linker/species/success-ratio/success-ratio.component';
import { IndividualComponent } from './linker/sapling-requests/individual/individual.component';
import { OrganizationContrComponent } from './linker/sapling-requests/organization-contr/organization-contr.component';
import { OrganizationNonComponent } from './linker/sapling-requests/organization-non/organization-non.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassComponent,
    DigitCodeComponent,
    SpeciesComponent,
    DashboardComponent,
    LinkerComponent,
    SaplingRequestsComponent,
    InventoryComponent,
    GardenersComponent,
    NurseriesComponent,
    AttendenceComponent,
    UserManagementComponent,
    ReportsComponent,
    AppSettingComponent,
    AddspeciesComponent,
    SuccessRatioComponent,
    IndividualComponent,
    OrganizationContrComponent,
    OrganizationNonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatChipsModule,
    MatSelectModule,
    MatCardModule,
    MatBottomSheetModule,
    HttpClientModule,
    MatExpansionModule,
    MatMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
