import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../Component/home/Shared/login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email;
  full_name;
  mobile;
  password;
  user_name;

  constructor( private router: Router,private socialService: LoginService) { }

  ngOnInit() {
  }

  register(){
    
    let user = {
        email: this.email,
        full_name: this.full_name,
        mobile:this.mobile,
        password:this.password,
        user_name:this.user_name
        
    }

    this.socialService.addSocialUsers(this.user_name,user);
    this.router.navigate(['/display']);

  }

  signIn(){
    this.router.navigate(['/']);
  }

}
