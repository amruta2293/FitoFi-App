import { Component, OnInit } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { SocialUser } from '../../app/Component/home/Shared/social-user';
import { LoginService } from '../Component/home/Shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user_name1 : string;
 password1 :string;
 id:string;
 email;
 password;

  constructor(private router:Router,private loginService: LoginService) { }

  ngOnInit() {
  }

login() {
  this.loginService.getUserdetails(this.email).subscribe(SocialUser => {
    this.user_name1 = SocialUser.user_name;
    this.password1 = SocialUser.password;
  
    console.log("useername",this.user_name1);
    console.log("password",this.password1);

  if(this.email == this.user_name1 && this.password == this.password1) {
  this.router.navigate(['/display']);
  }else {
  alert("Invalid credentials.")
  
  }
});
}
}



