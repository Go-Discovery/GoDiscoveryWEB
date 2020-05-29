import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import { Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    password: undefined,
    email: undefined,
    username: undefined
  };

  constructor(private auth: AuthService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  registerUser() {
    if (this.registerUserData.email != null && this.registerUserData.username != null && this.registerUserData.password != null) {
      console.log(this.registerUserData);
      this.auth.registerUser(this.registerUserData)
        .subscribe(
          res => this.router.navigate(['/connexion']),
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
