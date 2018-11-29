import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerRegService {

  constructor(private http:HttpClient) { }
  addCustomer(customer):Observable<any>{
    return this.http.post("http://10.230.179.21:1212/customerservice/registercustomer/",customer);
  }
  getVendorName(searchVendor):Observable<any>{
    return this.http.get("http://10.230.179.21:1212/vendorservice/getvendors/"+""+searchVendor);
  }
  getStates(searchCountry):Observable<any>{
    return this.http.get("http://10.230.179.21:1212/vendorservice/getcountry/"+""+searchCountry);
  }
}
