import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control(
        '',
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
    });
  }

  validationMessages = {
    username: [{ type: 'required', message: 'Username is required' }],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minLength', message: 'Password is too short!' },
    ],
  };

  validateForm(form: FormGroup) {
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAllAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateForm(control);
      }
    });
  }

  login(username: string, password: string) {
    this.userService.login(username, password).subscribe(({ data }) => {
      console.log(data.LOGIN);
      this.router.navigate(['/employees']);
    });
  }
}
