import { AppService } from './../../../services/app.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent {
  @ViewChild("fileDropRef", { static: false }) fileUpload: ElementRef;
  files: any[] = [];
  fileName = "";
  fileToUpload: File = null;
  showButton = false;
  shwoButtonLoad = false;
  showSearchView = false;
  constructor(private toastr: ToastrService,
    private appService: AppService) { }

  addContract(label) {
    if (label == "new") {
      this.showButton = true;
    } else {
      this.showButton = false;
      this.files = []
      this.shwoButtonLoad = false;
    }
  }

  onFileSelected() {
    if (this.files[this.files.length - 1].progress < 100) {
      console.log("Upload in progress.");
      this.toastr.warning("Le chargement du fichier est en cours.\n Veuillez patientez SVP...");
      return;
    }
    if (this.files[0]) {
      console.log('>>>>>>>>>>>', this.files);
      const fileName = this.files[0].name
      const file = this.files[0]
    }
  }

  searchView() {
    this.showSearchView = !this.showSearchView
  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    if (this.files.length) this.shwoButtonLoad = false;
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    this.shwoButtonLoad = true;
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileUpload.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
}
