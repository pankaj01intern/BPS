import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getAdminDetails():Observable<any>{
    return this.http.get("http://10.230.179.21:1212/adminservice/admins");
  }

  updatePassword(password):Observable<any>{
    return this.http.put("http://10.230.179.21:1212/adminservice/update/",password);
  }

}
