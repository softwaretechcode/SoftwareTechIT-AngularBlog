import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard  {
  constructor(private _router: Router) { }
  
  canActivate(): boolean {
    if (localStorage.getItem('admin-token')=='true') {
        this._router.navigate(['/admin'])
        return false;
    } else {
        return true;
    }
}

  
}
