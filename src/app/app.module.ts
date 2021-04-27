import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
