import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrdersComponent } from './orders/orders.component';
import { OverviewComponent } from './overview/overview.component';
import { SignupComponent } from './signup/signup.component';
import { UserhelpComponent } from './userhelp/userhelp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DocsComponent } from './docs/docs.component';


const routes: Routes = [
  {path:"",component:OverviewComponent},
  {path:"overview",component:OverviewComponent},
  {path:"login",component:LoginComponent},
  {path:"docs",component:DocsComponent},
  {path:"signup",component:SignupComponent},
  {path:"error",component:ErrorComponent},
  {path:"account",component:AccountComponent},
  {path:"notifications",component:NotificationsComponent},
  {path:"userhelp",component:UserhelpComponent},
  {path:"orders",component:OrdersComponent},
  {path:"reset-password",component:ResetPasswordComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
