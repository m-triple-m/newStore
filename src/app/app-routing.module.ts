import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterPlaceComponent } from './register-place/register-place.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { CalculateSpaceComponent } from './calculate-space/calculate-space.component';
import { BookingComponent } from './booking/booking.component';
import { CheckloginGuard } from './gaurds/checklogin.guard';
import { WebsiteStatsComponent } from './website-stats/website-stats.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { RegisteredLocationsComponent } from './registered-locations/registered-locations.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersPlacedComponent } from './orders-placed/orders-placed.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { ResultsComponent } from './results/results.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowseSpaceComponent } from './browse-space/browse-space.component';
import { AdminGuard } from './guards/admin.guard';
import { PackingMaterialsComponent } from './packing-materials/packing-materials.component';
import { BoxesComponent } from './boxes/boxes.component';
import { SuppliesComponent } from './supplies/supplies.component';


const routes: Routes = [
  {path : '',redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'register',component: RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'dashboard',component: DashboardComponent} ,  //redesign
  {path: 'forgot',component: ForgotpassComponent},
  {path:'userdash' , component:UserDashboardComponent}, //pending
  {path:'place',component:RegisterPlaceComponent},
  {path:'admin',component:AdminDashboardComponent, canActivate:[AdminGuard]},
  {path:'browsesp/:loc',component:BrowseSpaceComponent},
  {path:'browse',component:SearchLocationComponent},
  {path:'calcloc',component:CalculateSpaceComponent},
  {path:'book',component:BookingComponent},
  {path:'stats',component:WebsiteStatsComponent},
  {path:'reguser',component:RegisteredUsersComponent},
  {path:'regloc',component:RegisteredLocationsComponent},
  {path:'payment',component:PaymentComponent},
  {path:'orders',component:OrdersPlacedComponent},
  {path : 'signup',component:LoginSignUpComponent},
  {path : 'results',component:ResultsComponent},
  {path : 'packing',component:PackingMaterialsComponent},
  {path : 'boxes',component:BoxesComponent},
  {path : 'supplies',component:SuppliesComponent},
  {path : '**',component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
