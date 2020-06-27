import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  shwLogin=true;
  shwForgot=false;
  shwRegister=false;
  
  constructor(private router:Router) { 
  }

  ngOnInit(): void {
  }

  login()
  {
    sessionStorage.setItem('token','1');
    this.router.navigate(['/']);
  }

  showLogin()
  {
    this.shwForgot=false;
    this.shwLogin=true;
    this.shwRegister=false;
  }

  showForgot()
  {
    this.shwForgot=true;
    this.shwLogin=false;
    this.shwRegister=false;
  }

  showRegister()
  {
    this.shwForgot=false;
    this.shwLogin=false;
    this.shwRegister=true;
  }

  forgot()
  {
    alert('forgot');
  }

}
