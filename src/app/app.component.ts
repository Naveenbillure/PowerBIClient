import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReportMenu';
  userName:string;
  password:string;
  errorMsg:string;
  constructor(public router:Router){}
  login(){
    if(this.userName=="Admin"&&this.password=="Admin"){
      localStorage.setItem("isAuthorized","true");
    }
    else{
      localStorage.setItem("isAuthorized","false");
      this.errorMsg="Invalid Credentials";
    }
  }
}
