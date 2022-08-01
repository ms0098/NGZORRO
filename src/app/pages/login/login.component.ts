import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login_form: any;
  constructor(
    private _coreService: CoreService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.login_form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  signIn() {
    if (!this.login_form.valid) {
      return;
    } else {
      this._coreService.post('user/login', this.login_form.value).subscribe({
        next: (res: any) => {
          if (res && res.access_token && res.refresh_token) {
            this._authService.setLocalStorage(res);
            localStorage.setItem('user-info', JSON.stringify({ f: res.full_name, isOtpEnabled: res.otp_enabled }));
            this._router.navigate(['/dashboard']);
          }
        }
      });
    }
  }

}
