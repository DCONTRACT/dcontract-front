import { Component, HostListener, OnInit } from '@angular/core';
//import * as pdfjsLib from 'pdfjs-dist';
import exportFromJSON from 'export-from-json'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  imageSrc = "../../../../assets/dist/img/invoice2.pdf"
  public screenHeight: any;
  invoice = {
    "INVOICENUMBER": "FAC20170051",
    "INVOICEDATE": "30/04/2017",
    "CUSTOMERNUMBER":"CDATA",
    "TOTALHT": "425,00",
    "TVA":"85,00",
    "TOTALTTC": "425,00"
  }
  target = ""
  constructor() {
    //pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
  }

  ngOnInit(): void {
    this.screenHeight = window.innerHeight - 20;
    this.target = JSON.stringify(this.invoice);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenHeight = window.innerHeight - 20;
  }

  exportJson(){
    const data = [this.invoice]
    const fileName = 'invoice'
    const exportType =  exportFromJSON.types.json

    exportFromJSON({ data, fileName, exportType })
  }

}
