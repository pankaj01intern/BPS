import { Component, OnInit } from '@angular/core';
import { VendorRegService } from '../vendor-reg.service';
import { VendorUpdateService } from '../vendor-update.service';
import { CustomerRegService } from '../customer-reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vender-update',
  templateUrl: './vender-update.component.html',
  styleUrls: ['./vender-update.component.css'],
  providers:[VendorRegService,VendorUpdateService,CustomerRegService]
})
export class VenderUpdateComponent implements OnInit {

  constructor(private vendorUpdateService:VendorUpdateService,private regService:CustomerRegService,private route:Router) { }
  vendorId:string;
  vendorName:string;
  companyRegNo:string;
  vendorType:string;
  country:string;
  state:string;
  address:string;
  contact:string;
  email:string;
  website:string;
  empCount:number;
  custCount:number;
  details:any;
  stateObjs:any[];
  yearOfEstablishment:number;
  certIssueDate:Date;
  certValidityDate:Date;
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
  getStates(){
    
    if(this.country!=null){
    this.regService.getStates(this.country).subscribe(data => {
      this.stateObjs=data;
      console.log(data);
    });
  }
}
  getVendorDetails(){
    
    console.log(this.vendorId);
    this.vendorUpdateService.getVendorDetails(this.vendorId).subscribe(data => {
      this.details=data;
      if(data['vendorId']===null){
        alert("Vendor "+this.vendorId+" not found");
        this.route.navigate(['/home/vendorupdate']);
      }
      else{
      console.log(data);
      this.companyRegNo=data['companyRegNo'];
      this.vendorName=data['vendorName'];
      this.vendorType=data.amount['vendorType'];
      this.address=data['address'];
      this.contact=data['contact'];
      this.country=data.country['country'];
      this.getStates();
      this.state=data['state'];
      this.email=data['email'];
      this.website=data['website'];
      this.empCount=data['empCount'];
      this.custCount=data['custCount'];
      this.certIssueDate=data['certIssueDate'];
      this.certValidityDate=data['certValidityDate'];
      this.yearOfEstablishment=data['yearOfEstablishment'];
      }
    });
  }
  updateVendor(){
    const vendor = {
      vendorId:this.vendorId,
      vendorName:this.vendorName,
      companyRegNo:this.companyRegNo,
      vendorType:this.vendorType,
      country:this.country,
      state:this.state,
      address:this.address,
      contact:this.contact,
      email:this.email,
      website:this.website,
      empCount:this.empCount,
      custCount:this.custCount,
      certIssueDate:this.certIssueDate,
      certValidityDate:this.certValidityDate,
      yearOfEstablishment:this.yearOfEstablishment
    }
    console.log(vendor.certIssueDate+"----"+this.certIssueDate+"---"+this.vendorType);
    console.log(vendor);
    this.vendorUpdateService.updateVendor(vendor).subscribe(data => {
      this.details=data;
      console.log(data);
      alert("Vendor updated successfully");
    });
    console.log(this.details);
  }

}
