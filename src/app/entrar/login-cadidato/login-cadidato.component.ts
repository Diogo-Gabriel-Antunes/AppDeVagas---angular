import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCadidatoService } from './login-cadidato.service';

@Component({
  selector: 'app-login-cadidato',
  templateUrl: './login-cadidato.component.html',
  styleUrls: ['./login-cadidato.component.css'],
})
export class LoginCadidatoComponent implements OnInit {
  email: string = '';
  senha: string = '';
  constructor(
    private loginService: LoginCadidatoService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    this.loginService.autenticar(this.email, this.senha).subscribe(
      (resposta) => {
        console.log(resposta);
        // this.router.navigate(['dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
