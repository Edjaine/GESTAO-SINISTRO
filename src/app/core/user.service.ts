import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { Usuario } from './../interface/usuario';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new Subject<Usuario>();
  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
      this.decodeAndNotify();

  }

  getuser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const TOKEN = this.tokenService.getToken();
    const USER = jwt_decode(TOKEN) as Usuario;
    this.userSubject.next(USER);
  }

}
