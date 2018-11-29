import { Component, OnInit, Input } from '@angular/core';
import { GenerateBillService } from '../generate-bill.service';
import { $ } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers:[GenerateBillService]
})
export class PaymentComponent implements OnInit {

  constructor(private generate:GenerateBillService,private route:Router) { }
  @Input()
  price:number;
  @Input()
  customerId:string;
  @Input()
  vendorId:string;
  @Input()
  vendorName:string;
  @Input()
  vendorType:string;
  @Input()
  pendingAmount:number;
  details:any;
  payDate=new Date().toLocaleDateString();  
  cardName:string;
  cardYear:number;
  cardMonth:number;
  cvv:string;
  ngOnInit() {
    
    /* this.generate.generate().subscribe(data => {
      console.log(data);
      this.price=data[data.length].amountToPay;
    });
    this.payDate=new Date().toLocaleDateString(); */
    this.loadScript('../../assets/pay.min.js');
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
  onSubmit(){
    console.log(this.cardYear);
    console.log(this.cardMonth);
    if(this.customerId.length===5 && this.cardName!="" && this.cardMonth<=12 && 
    this.cardMonth>0 && this.cardYear>=new Date().getFullYear() && this.cvv.length===3){
      const bill = {
        customerId:this.customerId,
        
        vendorName:this.vendorName,
        vendorType:this.vendorType,
        pendingAmount:this.pendingAmount,
        paymentDate:new Date(),
        amountToPay:this.price
      }
      this.generate.generate(bill).subscribe(data => {
        this.details=data;
        console.log(this.details);
        alert("Bill successfully paid");
        this.route.navigate(['/home']);
      });
      //alert("success");
  //this.route.navigate(['/home/billpay'])
    }
    
    else if(this.price>this.pendingAmount || this.price<=0){
      alert("Incorrect Amount");
    }
    else{
      alert("Invalid Card Details");
    }
  }
}
