import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadComponent } from './upload/upload.component';
import { ShowComponent } from './show/show.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ToastrModule } from 'ngx-toastr';
import { ImageViewerConfig, ImageViewerModule, IMAGEVIEWER_CONFIG } from '@hallysonh/ngx-imageviewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

const MY_IMAGEVIEWER_CONFIG: ImageViewerConfig = {
  buttonStyle: {
    bgStyle: '#B71C1C' // custom container's background style
  }
};

@NgModule({
  declarations: [
    UploadComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    ImageViewerModule,
    PdfJsViewerModule,
    SharedModule,
    ComponentsModule,
    InvoiceRoutingModule
  ],
  providers: [
    {
      provide: IMAGEVIEWER_CONFIG,
      useValue: MY_IMAGEVIEWER_CONFIG
    }
  ]
})
export class InvoiceModule { }
