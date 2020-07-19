import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public hasToken(): boolean {
    return !!this.getToken();
  }

  public getToken(): any {
    return window.localStorage.getItem(KEY);
  }
  public setToken(token: string): void {
    window.localStorage.setItem(KEY, token);
  }

  private removeKey(): void {
    window.localStorage.removeItem(KEY);
  }

  public getUser() {

  }

}
