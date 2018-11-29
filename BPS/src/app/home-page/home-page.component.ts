import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
     if(sessionStorage.getItem('user')===null){
      //alert("Unauthorized Access");
      this.route.navigate(['/'])
    } 
  }
  logout(){
    sessionStorage.clear();
    this.route.navigate(['/']);
    alert("Logged out successfully");
  }

}
