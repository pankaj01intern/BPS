import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorUpdateService {

  constructor(private http:HttpClient) { }

  getVendorDetails(vendorId):Observable<any>{
    return this.http.get("http://10.230.179.21:1212/vendorservice/getvendor/"+vendorId);
  }
  updateVendor(vendor):Observable<any>{
    console.log(vendor);
    return this.http.put("http://10.230.179.21:1212/vendorservice/updatevendor/",vendor);
  }
}
