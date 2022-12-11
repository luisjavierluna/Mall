import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userCredentials, authenticationResponse } from './security';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = environment.apiURL + 'accounts'

  isLoggedIn(): boolean {
    return true
  }

  getRole(): string {
    return 'admin'
  }

  signIn(credentials: userCredentials): Observable<authenticationResponse> {
    return this.httpClient.post<authenticationResponse>(this.apiURL + '/signin', credentials)
  }
}
