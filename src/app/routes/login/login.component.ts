import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    username : undefined,
    password : undefined
  };

  constructor(private auth: AuthService, private router :Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  loginUser() {
    if ( this.loginUserData.username != null && this.loginUserData.password != null) {
      this.auth.loginUser(this.loginUserData)
        .subscribe(
          res => {
            sessionStorage.setItem('token',res.token);
            while (!this.auth.loggedIn()){}
            this.router.navigate(["/"]);
          },
          err => this.openSnackBar()
        )
    } else {
      this.openSnackBar();
    }

  }
  openSnackBar() {
    this._snackBar.open("Erreur lors de la création du compte", "ok", {
      duration: 2000,
    });
  }

}
