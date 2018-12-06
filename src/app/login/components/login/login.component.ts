import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

import { takeWhile } from 'rxjs/operators';
import { ErrorService } from '../../../core/services/error.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  configs = {
    isLogin: true,
    actionText: 'SignIn',
    buttonActionText: 'Create account',
    isLoading: false
  };

  private nameControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  private alive = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private errorService: ErrorService,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.createForm();
    const userData = this.authService.getRememberMe();
    if (userData) {
      this.email.setValue(userData.email);
      this.password.setValue(userData.password);
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    this.configs.isLoading = true;
    this.loginForm.disable();

    const operation = (this.configs.isLogin) ? this.authService.signinUser(this.loginForm.value) : this.authService.signupUser(this.loginForm.value);

    operation
      .pipe(
        takeWhile(() => this.alive)
      ).subscribe(
        res => {
          console.log(res);
          this.loginForm.enable();
          // this.authService.setRememberMe(this.loginForm.value);
          const redirect: string = this.authService.redirectUrl || '/dashboard';

          // this.authService.isAuthenticated
          //   .pipe(takeWhile(() => this.alive))
          //   .subscribe((is: boolean) => {
          //     if (is) {
          //       this.router.navigate([redirect]);
          //       this.authService.redirectUrl = null;
          //       this.configs.isLoading = false;
          //     }
          //   });
        },
        err => {
          console.log(err);
          this.loginForm.enable();
          this.configs.isLoading = false;
          this.snackBar.open(this.errorService.getErrorMessage(err), 'Done', {duration: 5000, verticalPosition: 'top'});
        }
      );
  }

  get name(): FormControl { return <FormControl>this.loginForm.get('name'); }
  get email(): FormControl { return <FormControl>this.loginForm.get('email'); }
  get password(): FormControl { return <FormControl>this.loginForm.get('password'); }

  changeAction(): void {
    this.configs.isLogin = !this.configs.isLogin;
    this.configs.actionText = !this.configs.isLogin ? 'SignUp' : 'SignIn';
    this.configs.buttonActionText = !this.configs.isLogin ? 'Already have account' : 'Create account';
    !this.configs.isLogin ? this.loginForm.addControl('name', this.nameControl) : this.loginForm.removeControl('name');
  }

  onKeepSigned(): void {
    this.authService.toggleKeepSigned();
  }

  onRememberMe(): void {
    this.authService.toggleRememberMe();
  }

}
