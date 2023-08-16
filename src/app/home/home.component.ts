import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:
    [`../css/index.css`,
      `../css/style.css`,
      `../css/button/btn.css`,
      `../css/responsive.css`,
      `../css/footer.css`,
      `./home.component.css`
    ]
})
export class HomeComponent {
  userDisplayName = ''; 

  constructor(
    public activatedRoute: ActivatedRoute, 
    private cookieService: CookieService,
    private router: Router
  ) {   
    this.userDisplayName = this.cookieService.get('fullname');  
  }


  isLogin() : boolean{
    if(this.cookieService.get('isUserLoggedIn') == ''){
      return false;
    }
    return true;
  }
}
