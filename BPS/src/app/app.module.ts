import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaymentComponent } from './payment/payment.component';
import { CusRegComponent } from './cus-reg/cus-reg.component';
import { CusUpdateComponent } from './cus-update/cus-update.component';
import { VenderRegComponent } from './vender-reg/vender-reg.component';
import { VenderUpdateComponent } from './vender-update/vender-update.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PaymentComponent,
    CusRegComponent,
    CusUpdateComponent,
    VenderRegComponent,
    VenderUpdateComponent,
    LoginComponent,
    WelcomeComponent,
    GenerateBillComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
