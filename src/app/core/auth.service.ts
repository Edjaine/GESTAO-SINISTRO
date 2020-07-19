import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

const API_URL = 'http://localhost/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  autentica(usuario: string, senha: string): Observable<any> {
    return this.http.get(`${API_URL}Login/Logar?usuario=${usuario}&senha=${senha}`, { observe: 'response' })
      .pipe(tap(res => {
        const TOKEN = res.body.token;
        this.tokenService.setToken(TOKEN);
      }
      ));
  }
}
