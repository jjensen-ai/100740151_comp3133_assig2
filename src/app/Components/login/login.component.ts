import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  error: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login(username: string, password: string) {
    this.userService.login(username, password).subscribe(({ data }) => {
      this.router.navigate(['/employees']);
    });
  }
}
