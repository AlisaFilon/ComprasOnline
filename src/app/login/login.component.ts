import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm = new FormGroup({
  email: new FormControl('test+5@gantabi.com', [Validators.required, Validators.email]),
  password: new FormControl('1254rtY524', Validators.required)
});

  constructor(
  private authService: AuthenticationService,
  private router: Router,
  private toast: HotToastService
  ) {}



  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
    }
submit(){
if (!this.loginForm.valid){
return;
}

const { email, password } = this.loginForm.value;
this.authService.login(email, password).pipe(
this.toast.observe({
success: 'Iniciar sesion correcto',
loading: 'Inicial sesion...',
error: 'Error'
})
).subscribe(() =>{
this.router.navigate(['/home']);
});

}

}
