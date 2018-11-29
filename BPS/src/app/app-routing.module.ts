import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { VenderRegComponent } from './vender-reg/vender-reg.component';
import { VenderUpdateComponent } from './vender-update/vender-update.component';
import { CusRegComponent } from './cus-reg/cus-reg.component';
import { CusUpdateComponent } from './cus-update/cus-update.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'home',component:HomePageComponent,children:
  [
    {path:'',component:WelcomeComponent}, 
    {path:'welcome',component:WelcomeComponent},
  {path:'vendorregister',component:VenderRegComponent},
  {path:'vendorupdate',component:VenderUpdateComponent},
  {path:'customerregister',component:CusRegComponent},
  {path:'customerupdate',component:CusUpdateComponent},
  //{path:'billpay',component:PaymentComponent},
  {path:'generatebill',component:GenerateBillComponent}
]
},
  {path:'login',component:LoginComponent},
  {path:'reset-password',component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
