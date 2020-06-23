import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:string;
  constructor(public _AuthService:AuthService , public _Router:Router) { }

  registerForm:FormGroup=new FormGroup({
    "first_name":new FormControl(null,[Validators.required,Validators.minLength(3)]),
    "last_name":new FormControl(null,[Validators.required,Validators.minLength(3)]),
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    "age":new FormControl(null,[Validators.required,Validators.min(16),Validators.max(60)])
  });

  ngOnInit(): void {
  }

  getFormData(formData){
    if(formData.valid==true){

      this._AuthService.signUp(formData.value).subscribe((data) => {
        if(data.message == 'success'){
          this._Router.navigate(['../login']);
        }
        else{
          this.error="Email alredy Exist";
        }
      });
    }
  }


  
}
