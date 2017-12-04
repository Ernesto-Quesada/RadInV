import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
//isAuth;
  constructor(private auth: AuthService) { 
    //this.isAuth = auth.isAuthenticated
  }

  ngOnInit() {
  }
  logMeOut() {
    return this.auth.logOut()
  }

}
