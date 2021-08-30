import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { S3 } from 'aws-s3';
import { } from "process";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

class Job {
  job: string;
  status: string;
}

class Invoice {
  INVOICENUMBER: string;
  INVOICEDATE: string;
  TOTALHT: string;
  TVA: string;
  TOTALTTC: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiURL = "http://localhost:5000/invoice/v1.0"
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'
    }),
  }

  // HttpClient API get() method => Fetch employees list
  uploadFileS3(file): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<boolean>(
      'http://localhost:5000/invoice/upload',
      formData,
      this.httpOptions
    )
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getStatus(fileName): Observable<Job> {
    return this.http.get<Job>(
      'http://localhost:5000/invoice/uploadStatus?filename='+fileName,
      this.httpOptions
    )
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getInvoice(fileName): Observable<Invoice> {
    return this.http.get<Invoice>(
      'http://localhost:5000/invoice/extract?filename='+fileName,
      this.httpOptions
    )
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
