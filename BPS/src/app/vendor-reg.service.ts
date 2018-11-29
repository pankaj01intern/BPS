import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorRegService {

  constructor(private http:HttpClient) { }
  registerVendor(vendor):Observable<any>{
    return this.http.post("http://10.230.179.21:1212/vendorservice/registervendor/",vendor);
  }
  getStates(searchCountry):Observable<any>{
    return this.http.get("http://10.230.179.21:1212/vendorservice/getcountry/"+""+searchCountry);
  }
}
