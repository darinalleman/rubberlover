import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TireComponent } from './home/tire/tire.component';
import { LoginComponent } from './login/components/login/login.component';
import { PasswordResetComponent } from './login/components/password-reset/password-reset.component';
import { RegisterComponent } from './login/components/register/register.component';
import { VerifyEmailComponent } from './login/components/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'emailVerification', component: VerifyEmailComponent },
  { path: 'tire/:id', component: TireComponent},
  { path: 'passwordReset', component: PasswordResetComponent },
  { path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
