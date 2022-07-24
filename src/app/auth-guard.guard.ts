import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){

  }
  authuser:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
     this.authService.login.subscribe((data:any)=>{
       this.authuser=data;

     })
     if(this.authuser || localStorage.getItem('token')){
       
       return true;
     }
     else{
       window.alert('You did not have access to this page')
       this.router.navigateByUrl('/login')
       return false
     }
     
  }
 
  
  
}
