import { Component } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  /**
   *
   */
  constructor(private auth: AuthServiceService) {}

  logout(): void {
    this.auth.logout();
  }
}
