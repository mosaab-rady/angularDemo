import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { LoginDto } from './LoginDto';
import { UserDto } from './UserDto';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  User: UserDto | null = null;

  private url = 'https://localhost:7084';

  constructor(private http: HttpClient, private router: Router) {}

  async isAuthenticated(): Promise<boolean> {
    const req = this.http.get<UserDto>(
      'https://localhost:7084/api/account/isAuthenticted',
      {
        withCredentials: true,
      }
    );

    const res: UserDto | false = await firstValueFrom(req).catch(() => {
      return false;
    });

    console.log(res);
    // console.log(this.User);

    if (res) {
      this.User = res;
      return true;
    } else {
      return false;
    }
  }

  login(user: LoginDto): Observable<UserDto> {
    const req = this.http.post<UserDto>(
      'https://localhost:7084/api/account/login',
      user,
      { withCredentials: true }
    );
    return req;
  }

  logout(): void {
    this.http
      .post(`${this.url}/api/account/logout`, {}, { withCredentials: true })
      .subscribe();

    this.router.navigate(['login']);
  }
}
