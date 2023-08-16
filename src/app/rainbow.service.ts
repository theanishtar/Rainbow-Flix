import { Injectable } from '@angular/core';
//Xử lí bất đồng bộ
import { Observable } from 'rxjs'; 
import { of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RainbowService {
  private userURL = "http://localhost:3000/login";
  
  getAllUsers() : Observable<any>{
    return this.http.get<any>(this.userURL).pipe(
      // tap(() => console.log("Lấy dữ liệu thành công")),
      tap(receivedUser => console.log(`receivedUser = ${JSON.stringify(receivedUser)}`)),
      catchError(error => of([]))
    )
  }

  constructor(private http: HttpClient) { }
}
