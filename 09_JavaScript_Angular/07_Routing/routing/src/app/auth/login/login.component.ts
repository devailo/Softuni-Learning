import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = 'email';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  loginHandler(): void {
    this.authService.user = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      username: 'Destroyer'
    };

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl])
  }

  HandleFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const value: { email: string; password: string } = form.value;
    console.log(value);
    form.setValue({ email: '', password: '' })

  }
}
