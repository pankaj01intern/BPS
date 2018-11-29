import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerUpdateService {

  constructor(private http:HttpClient) { }

  getCustomerDetails(customerId):Observable<any>{
    return this.http.get("http://10.230.179.21:1212/customerservice/getcustomer/"+""+customerId);
  }
  updateCustomer(customer){
    return this.http.put("http://10.230.179.21:1212/customerservice/updatecustomer/",customer);
  }
}
