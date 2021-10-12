import { Component, OnInit } from '@angular/core';
// import pour la 1ere manière faire le form
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  errMsg: string;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

//1ere manière de faire le form
/*   onSubmitAuthForm(form: NgForm) {
    const values = form.form.value;
    this.authService
      .signin(values.email, values.password)
      .then(() => {
        this.router.navigateByUrl('home');
      })
      .catch((errMsg: string) => {
        this.errMsg = errMsg;
      });
  } */

  //première manière "avancée" de faire le form
  onSubmitAuthForm() {

    this.authService
      .signin(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('home');
      })
      .catch((errMsg: string) => {
        this.errMsg = errMsg;
      });
  }

}
