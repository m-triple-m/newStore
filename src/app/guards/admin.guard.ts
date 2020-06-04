import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authservice:AuthService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authservice.loggedin && this.authservice.isadmin)  {
        return true;
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to be logged in as Admin',})
           this.router.navigate(['/signup']);
      }
  }
  
}
