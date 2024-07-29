import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private _router: Router) { }

   canActivate(): boolean {
        if (localStorage.getItem('token')=='true') {
            return true;
        } else {
            this._router.navigate(['./login'])
            return false
        }
    }
    
}
