import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard  {
  constructor(private _router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('admin-token')=='true') {
        
        return true;
    } else {
      this._router.navigate(['/admin-login']);
        return false;
    }
}
  
}
