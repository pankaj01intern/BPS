import { Component, OnInit } from '@angular/core';
import { CustomerUpdateService } from '../customer-update.service';
import { CustomerRegService } from '../customer-reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cus-update',
  templateUrl: './cus-update.component.html',
  styleUrls: ['./cus-update.component.css']
})
export class CusUpdateComponent implements OnInit {
  customerId:string;
  details:any;
  customerName:string;
  vendors:any[];
  address:string;
  contactNumber:string;
  country:string;
  state:string;
  email:string;
  vendorType:string;
  cardNo:string;
  cardType:string;
  cardValidity:Date;
  balance:string;
  stateObjs:any[];
  stateObj
  idDocType:string;
  docNo:string;
  regDate:Date;
  vendorName:string;
  constructor(private customerUpdateService:CustomerUpdateService,private regService:CustomerRegService,private route:Router) { }
  ngOnInit() {
    if(sessionStorage.getItem('user')===null){
      alert("Unauthorized Access");
      this.route.navigate(['/'])
    }
    this.loadScript('../../assets/min.js');
  }
  searchVendor(){
    
    //if(this.vendorType!=null){
    this.regService.getVendorName(this.vendorType).subscribe(data => {
      this.vendors=data;
      console.log(data);
    });
  //}
}
  getStates(){
    
    if(this.country!=null){
    this.regService.getStates(this.country).subscribe(data => {
      this.stateObjs=data;
      console.log(data);
    });
  }
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
  
  searchCustomer(){
    const customer = {
      customerId:this.customerId
    };
    console.log(this.customerId);
    this.customerUpdateService.getCustomerDetails(this.customerId).subscribe(data => {
      this.details=data;
      if(this.details['customerName']===null){
        alert("Customer "+this.customerId+" not found");
        this.route.navigate(['/home/customerupdate']);
      }
      else{
      this.customerName=data['customerName'];
      this.address=data['address'];
      this.contactNumber=data['contactNumber'];
      this.country=data.country['country'];
      this.getStates();
      console.log(this.country);
      this.state=data.country['state'];
      this.email=data['email'];
      this.vendorType=data.amount['vendorType'];
      console.log(this.vendorType);
      this.searchVendor();
      this.cardNo=data.card['cardNo'];
      this.idDocType=data['idDocType'];
      this.docNo=data['docNo'];
      this.regDate=data['regDate'];
      this.balance=data['balance'];
      this.vendorName=data['vendorName'];
      this.cardType=data.card['cardType'];
      this.cardValidity=data.card['cardValidity'];
      console.log(data);
      }
    });
  }
  updateCustomer(){
    const customer = {
      customerId:this.customerId,
      customerName:this.customerName,
      address:this.address,
      contactNumber:this.contactNumber,
      country:this.country,
      state:this.state,
      email:this.email,
      vendorType:this.vendorType,
      vendorName:this.vendorName,
      cardNo:this.cardNo,
      balance:this.balance,
      idDocType:this.idDocType,
      docNo:this.docNo,
      regDate:this.regDate
    }
    console.log(customer);
    this.customerUpdateService.updateCustomer(customer).subscribe(data => {
      this.details = data;
      console.log(data);
    });
  }
}
