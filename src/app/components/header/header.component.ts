import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


import { AuthService } from 'src/app/shared/dashauth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class HeaderComponent implements OnInit {
  darkMode: any = null;
  chktheme: any;
  localtoken = false;

  changeThemeToDark = () => {
    document.body.classList.toggle('dark-theme');
    this.chktheme = false;
    localStorage.setItem("theme-mode", "dark-theme") // save theme to local storage
  }

  changeThemeToLight = () => {
    document.body.classList.toggle('light-theme'); // set theme light

    this.chktheme = true;
    localStorage.setItem("theme-mode", 'light-theme') // save theme to local storage
  }

  constructor(private auth: AuthService, private router: Router) {

  }


  ngOnInit(): void {

    this.darkMode = localStorage.getItem("theme-mode");
    document.body.classList.toggle(this.darkMode);

    if (this.darkMode === 'light-theme') {
      this.chktheme = false;
    }
    else {
      this.chktheme = true;
    }
    if (!localStorage.getItem("theme-mode")) {
      this.chktheme = false;
    }

    if (localStorage.getItem('token') == 'true') {
      this.localtoken = true;

    }

    else {
      this.localtoken = false;
    }
  }
  logOut() {
    this.auth.logout();
    this.router.navigate(['./login']);

    return;
  }
  themeChenge() {

    const checkbox = document.getElementById("checkbox");
    // Apply retrived them to the website
    checkbox.addEventListener('change', () => {
      // Retrieve saved them from local storage
      let theme = localStorage.getItem('theme-mode');
      if (theme === 'dark-theme') {
        this.changeThemeToLight()
      } else {
        this.changeThemeToDark()
      }


    });
  }


}

