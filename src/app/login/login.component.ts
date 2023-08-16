import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RainbowService } from '../rainbow.service';
import { delay, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
// import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:
    [
      `../css/index.css`,
      `../css/style.css`,
      `../css/footer.css`,
      `./login.component.css`,
      `../css/button/btn.css`,
      `../css/responsive.css`,
      `../toast/style.css`
    ]
})
export class LoginComponent {
  public loginForm!: FormGroup;
  submitted = false;

  emesage = '';
  smesage = '';
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private rainbowService: RainbowService,
    // private validatorService: ValidatorService,
    private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      // email: ['', [Validators.required, this.validatorService.emailValidator()]],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.rainbowService.getAllUsers().subscribe(res => {
        const user = res.find((item: any) => {
          return item.email === this.loginForm.value.email && item.password === this.loginForm.value.password
        });
        function delay(ms: number) {
          return new Promise(function (resolve) {
            setTimeout(resolve, ms);
          })
        }
        if (user) {
          // console.log("========" +  JSON.stringify(user));
          // alert(user);
          this.smesage = "Login Succesful";
          // this.loginForm.reset();
          delay(2000).then(res => {
            this.smesage = '';
            this.router.navigate(["home"]);
            this.cookieService.set('fullname', user.fullname);
            this.cookieService.set('isUserLoggedIn', JSON.stringify(user));
          })

        } else {
          this.emesage = "wrong username or password";
          setTimeout(() => this.emesage = '', 2000);
        }
      }, (err) => {
        this.emesage = err;
        setTimeout(() => this.emesage = '', 2000);
      })
    }

  }



}
