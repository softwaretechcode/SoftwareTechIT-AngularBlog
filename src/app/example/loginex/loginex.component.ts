import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginex',
  templateUrl: './loginex.component.html',
  styleUrls: ['./loginex.component.css']
})
export class LoginexComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    
  }
  


  

  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login logic
      window.alert(this.loginForm.value.email+" : "+this.loginForm.value.password);
    }
  }

}
