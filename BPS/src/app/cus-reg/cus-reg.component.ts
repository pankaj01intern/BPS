import { Component, OnInit } from '@angular/core';
import { CustomerRegService } from '../customer-reg.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cus-reg',
  templateUrl: './cus-reg.component.html',
  styleUrls: ['./cus-reg.component.css'],
  providers:[CustomerRegService]
})
export class CusRegComponent implements OnInit {

  customerName:string;
  firstName:string;
  lastName: string;
  address:string;
  contactNumber:string;
  country:string;
  state:string;
  email:string;
  idDocType:string;
  docNo:string;
  regDate=new Date().toLocaleDateString();
  vendorType:string;
  vendorName:string;
  cardNo:string;
  cardType:string;
  cardValidity:Date;
  balance:string;
  vendorNamesObjs:any[];
  stateObjs:any[];
  constructor(private regService:CustomerRegService,private route:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('user')===null){
      alert("Unauthorized Access");
      this.route.navigate(['/'])
    }
    this.loadScript('../../assets/min.js');
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  details:any;
  
  registerCustomer(){
    console.log(this.firstName+" "+this.lastName);
    console.log(this.vendorName);
    const customer = {
      customerName : this.firstName+" "+this.lastName,
      address: this.address,
      contactNumber: this.contactNumber,
      country: this.country,
      state:this.state,
      email:this.email,
      idDocType:this.idDocType,
      docNo:this.docNo,
      regDate:new Date(),
      vendorType:this.vendorType,
      vendorName:this.vendorName,
      cardNo:this.cardNo,
      cardType:this.cardType,
      cardValidity:this.cardValidity,
      balance:this.balance
    }
    console.log(customer);
    this.regService.addCustomer(customer).subscribe(data => {
      this.details=data;
      console.log(data);
      alert("Customer "+data['customerId']+" Registered Successfully to "+data['vendorName']);  
    }); 
    
  }
  searchVendor(){
    
    if(this.vendorType!=null){
    this.regService.getVendorName(this.vendorType).subscribe(data => {
      this.vendorNamesObjs=data;
      console.log(data);
    });
  }}
  getStates(){
    
    if(this.country!=null){
    this.regService.getStates(this.country).subscribe(data => {
      this.stateObjs=data;
      console.log(data);
    });
  }
}
}
