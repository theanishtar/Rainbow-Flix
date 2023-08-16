import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { RainbowService } from '../rainbow.service';
import { Router, ActivatedRoute } from '@angular/router';  
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: 
  [
    `../css/index.css`,
    `../css/style.css`,
    `./dashboard.component.css`
  ]
})
export class DashboardComponent {
  // userDisplayName = '';  
  constructor(
    public activatedRoute: ActivatedRoute, 
    private cookieService: CookieService,
    private router: Router
  ) {   
    // this.userDisplayName = this.cookieService.get('fullname');  
  }

  isLogin() : boolean{
    if(this.cookieService.get('isUserLoggedIn') == ''){
      return false;
    }
    return true;
  }

  logout(): void {  
    this.router.navigate(['/home']);  
    this.cookieService.deleteAll();  
  } 
}
