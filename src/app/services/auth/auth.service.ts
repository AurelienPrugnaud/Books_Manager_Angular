import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signin(email: string, password: string): Promise<void | string> {
    return new Promise<void | string>(
      (res, rej) => {
        setTimeout(() => {
          if(email === 'formation@angular.com' && password === 'azerty'){
            this.token.next('azertyuiop');
            res();
          } else {
            rej('Les identifiants sont incorrects.');
          }
        }, 300);
      }
    )
  }

  signout(): Promise<void>{
    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res();
      }
    );
  }
}
