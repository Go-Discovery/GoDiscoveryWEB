import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public connected : boolean = false;

  constructor(public auth: AuthService,private router:Router) { }

  ngOnInit(): void{
    this.connected = this.auth.loggedIn();
  }
  LogOut(){
    this.auth.loggedOut();
    this.connected = false;
  }

}
