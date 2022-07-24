import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login: FormGroup;
  user:any;

  constructor(private fb: FormBuilder ,private authservice:AuthService ,private route:Router) { }

  ngOnInit() {

    this.Login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],                 //login Page Validation
      device_id:['123456789',Validators.required],
      device_type:['ios',Validators.required],
      device_info:['info',Validators.required],
      device_token:['h78n8394y9hg85guy',Validators.required]
    })
  }

  onSubmit() {
    console.log(this.Login.value)
    this.authservice.authLogin(this.Login.value).subscribe((response:any)=>{    // Subscribe Service Data
      let res=response;
      console.log(res);
      localStorage.setItem('token',res.data.auth_token)  //localstorage Set Token
      console.log(res);
      if(res.code==200){
        this.user=true;
      }
      else{
        this.user=false;
        window.alert('You did not have access to this page')
      }
      this.authservice.isLogin(this.user);
      this.route.navigateByUrl('linker')
   
    }) 
  }

}
