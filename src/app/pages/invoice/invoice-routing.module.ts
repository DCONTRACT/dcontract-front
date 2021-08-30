import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: "",
    component: UploadComponent,
  },
  {
    path: "show",
    component: ShowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
