import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'; 

const modules = [
  DataTablesModule,
  CommonModule,
  HttpClientModule
]

@NgModule({
  declarations: [
  ],
  imports: modules,
  exports: modules
})
export class SharedModule { }
