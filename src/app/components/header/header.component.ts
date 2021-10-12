import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isConnected: boolean;
  isAddPage: boolean;

  tokenSub: Subscription;
  routerEventsSub: Subscription;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((e: any) => {
      if(e.url === '/books/new') {
        this.isAddPage = true;
      } else {
        this.isAddPage = false;
      }
    })

    this.tokenSub = this.authservice.token.subscribe(
      (token : string) => {
        if(token) {
          this.isConnected = true;
        } else {
          this.isConnected = false;
        }
      }
    );
  }

  onClickSignout() {
    this.authservice
      .signout()
      .then(() => {
        this.router.navigateByUrl('auth');
      })
  }

  ngOnDestroy() {
    this.tokenSub.unsubscribe();
    this.routerEventsSub.unsubscribe();
  }

}
