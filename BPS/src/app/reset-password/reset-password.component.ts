import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  userName:string;
  newPassword:string;
  confirmPassword:string;

  

  constructor(private route:Router, private login:LoginService) { }

  ngOnInit() {
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



  updatePassword(){

    const user = {
      username : this.userName,
      password:this.newPassword,
    }

    
    if(user.username === 'admin'){

    
    if(this.newPassword == this.confirmPassword){
    this.login.updatePassword(user).subscribe(data => {
      console.log(data);    
    }
  
  );
  alert("password changed successfully");
  this.route.navigate(['/login'])
}


else{
  alert("Passwords are not matching");
}
 
  }

  
else{
  alert("user does not exist")
  this.route.navigate(['/login'])
}

  }


  }
  



