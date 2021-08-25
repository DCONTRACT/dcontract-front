import { Error404Component } from './pages/error404/error404.component';
import { FaqComponent } from "./pages/faq/faq.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "invoice", pathMatch: "full" },
  {
    path: "contract",
    loadChildren: "src/app/pages/contract/contract.module#ContractModule",
  },
  {
    path: "invoice",
    loadChildren: "src/app/pages/invoice/invoice.module#InvoiceModule"
  },
  {
    path: "auth",
    loadChildren: "src/app/pages/user/user.module#UserModule"
  },
  {
    path: "login",
    redirectTo: "auth/login"
  },
  {
    path: "register",
    redirectTo: "auth/register"
  },
  {
    path: "forgot-password",
    redirectTo: "auth/forgot-password"
  },
  {
    path: "change-password",
    redirectTo: "auth/change-password"
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  // {
  //   path: '**',
  //   component: Error404Component,
  // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
