import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

const API_URL = 'http://localhost/Login/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  autentica(usuario: string, senha: string): Observable<any> {
    return this.http.post(`${API_URL}Login/Logar?{usuario}=${usuario}&senha=${senha}`, {});
  }
}
