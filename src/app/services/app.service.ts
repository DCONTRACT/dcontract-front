import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { S3 } from 'aws-s3';
import { } from "process";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiURL = "http://localhost:5000/invoice/v1.0"
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
  }

  // HttpClient API get() method => Fetch employees list
  uploadFileS3(file): Observable<boolean> {
    return this.http.post<boolean>(
      this.apiURL,
      JSON.stringify({ 'url': file }),
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
