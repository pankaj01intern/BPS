import { Component, OnInit } from '@angular/core';
import { CustomerRegService } from '../customer-reg.service';
import { VendorRegService } from '../vendor-reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vender-reg',
  templateUrl: './vender-reg.component.html',
  styleUrls: ['./vender-reg.component.css'],
  providers:[CustomerRegService,VendorRegService]
})
export class VenderRegComponent implements OnInit {
  stateObjs:any[];
  vendorName:string;
  companyRegNo:string;
  vendorType:string;
  address:string;
  country:string;
  state:string;
  email:string;
  contact:string;
  website:string;
  certIssueDate=new Date().toLocaleDateString();
  tempDate=new Date();
  certValidityDate=new Date(this.tempDate.setFullYear(this.tempDate.getFullYear()+15)).toLocaleDateString();

  /**this.tempDate.setFullYear(this.tempDate.getFullYear()+15).toLocaleString() */
  empCount:number;
  custCount:number;
  yearOfEstablishment:number;

  details:any;
  constructor(private route:Router,private custRegService:CustomerRegService,private vendorRegService:VendorRegService) { }

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
  registerVendor(){
    const vendor = {
      vendorName:this.vendorName,
      companyRegNo:this.companyRegNo,
      vendorType:this.vendorType,
      address:this.address,
      country:this.country,
      state:this.state,
      email:this.email,
      contact:this.contact,
      website:this.website,
      certIssueDate:new Date(),
      certValidityDate:this.tempDate,
      empCount:this.empCount,
      custCount:this.custCount,
      yearOfEstablishment:this.yearOfEstablishment
    }
    console.log(vendor);
    this.vendorRegService.registerVendor(vendor).subscribe(data => {
      this.details=data;
      console.log(data);
      alert("Vendor "+data['vendorId']+" registered successfully!");
      this.route.navigate(['/home/welcome'])
    });

  } 
  getStates(){
    if(this.country!=null){
    this.custRegService.getStates(this.country).subscribe(data => {
      this.stateObjs=data;
      console.log(data);
    });
    }
  }
}
