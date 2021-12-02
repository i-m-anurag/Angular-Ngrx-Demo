import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestinterface } from 'src/app/shared/types/registerRequest.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthReponseInterface } from 'src/app/shared/types/authResponse.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestinterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    console.log(data);
    return this.http
      .post<AuthReponseInterface>(url, data)
      .pipe(map((res: AuthReponseInterface) => res.user));
  }
}
