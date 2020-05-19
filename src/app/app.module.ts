import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterPlaceComponent } from './register-place/register-place.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule, MatFormFieldModule,MatDatepickerModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule , MatButtonModule,MatStepperModule,MatRippleModule,MatNativeDateModule,
MatSelectModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { SearchLocationComponent } from './search-location/search-location.component';
import { CalculateSpaceComponent } from './calculate-space/calculate-space.component';
import { BookingComponent } from './booking/booking.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { WebsiteStatsComponent } from './website-stats/website-stats.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { RegisteredLocationsComponent } from './registered-locations/registered-locations.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersPlacedComponent } from './orders-placed/orders-placed.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { ResultsComponent } from './results/results.component';
import { PackingMaterialsComponent } from './packing-materials/packing-materials.component';
import { ItemComponent } from './item/item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowseOrdersComponent } from './browse-orders/browse-orders.component';
import { BrowseUsersComponent } from './browse-users/browse-users.component';
import { BrowseLocationsComponent } from './browse-locations/browse-locations.component';
import { BrowseSpaceComponent } from './browse-space/browse-space.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ForgotpassComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    RegisterPlaceComponent,
    SearchLocationComponent,
    CalculateSpaceComponent,
    BookingComponent,
    WebsiteStatsComponent,
    RegisteredUsersComponent,
    RegisteredLocationsComponent,
    PaymentComponent,
    OrdersPlacedComponent,
    LoginSignUpComponent,
    ResultsComponent,
    PackingMaterialsComponent,
    ItemComponent,
    NotFoundComponent,
    BrowseOrdersComponent,
    BrowseUsersComponent,
    BrowseLocationsComponent,
    BrowseSpaceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,MatFormFieldModule,
    MatInputModule,
    MatCardModule , MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatExpansionModule,
    FontAwesomeModule,
    SweetAlert2Module,
    MatStepperModule,
    MatRippleModule ,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
