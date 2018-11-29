import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateBillService {

  constructor(private http:HttpClient) { }
  generate(obj):Observable<any>{
    console.log(obj);
    return this.http.post("http://10.230.179.21:1212/billservice/generate/",obj);
  }
  getVendor(customer):Observable<any>{
    return this.http.get("http://10.230.179.21:1212/customerservice/getcustomer/"+customer);
  }
  getAmountToPay(customerId):Observable<any>{
    return this.http.get("http://10.230.179.21:1212/billservice/getbilldetails/"+customerId);
  }
}
