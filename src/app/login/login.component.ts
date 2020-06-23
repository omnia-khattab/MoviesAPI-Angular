import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;
  constructor(public _AuthService:AuthService, public  _Router:Router) { }

  ngOnInit(): void {
  }

  LoginForm:FormGroup=new FormGroup({
    
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
  });

  getFormData(formData){

    if(formData.valid==true){
      
      this._AuthService.login(formData.value).subscribe((data) => {
        
        if(data.message == 'success'){

          this._AuthService.saveUserData(data.user,data.token);
          /*console.log(data);*/
          this._Router.navigate(['/home']);
        }
        else{
          console.log(data);
          this.error="Email or Password Not Correct";
        }
      });
    }
  }
}
