import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private loginService:LoginService) { }
  name:string;
  password:string;
  ngOnInit() {
  }
  validate(){
    this.loginService.getAdminDetails().subscribe(data => {
      console.log(data);
      if(this.name==data[0]['username'] && this.password==data[0]['password']){
        sessionStorage.setItem('user',this.name);
        console.log(sessionStorage.getItem('user'));
        this.route.navigate(['/home/'])
    }
    else{
      alert("Invalid Username/Password");
    }

    });
    
  }

}
