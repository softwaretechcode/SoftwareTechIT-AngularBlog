import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LogInAuthGuard  {
  constructor(private _router: Router) { }

    canActivate(): boolean {
        if (localStorage.getItem('token')=='true') {
            this._router.navigate(['/dashboard'])
            return false;
        } else {
            return true;
        }
    }
    
}
