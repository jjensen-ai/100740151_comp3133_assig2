import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  errors: string | undefined;
  @Output() returnLogin = new EventEmitter<string>();
  message: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }

  get username() {
    return this.registerForm.get('username');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get email() {
    return this.registerForm.get('email');
  }

  signup(username: string, password: string, email: string) {
    if (username && email && password) {
      this.userService
        .signUp(username, email, password)
        .subscribe(({ data }) => {
          this.message=true;
          this.registerForm.reset();
        });
    }
  }
}
