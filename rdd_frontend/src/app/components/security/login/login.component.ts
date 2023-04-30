
import { SharedService } from './../../../services/shared.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('','','', '');
  shared : SharedService;
  message : string = '';

  constructor(private userService: UserService,
              private router: Router) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
  }
  

  login(){
  
    this.message = '';
    this.userService.login(this.user).subscribe((userAuthentication: any) => {
      console.log('chegou')
        this.shared.token = userAuthentication.token;
        this.shared.user = userAuthentication;
        //this.shared.user.profile = this.shared.user.profile.substring(5);
        this.shared.showTemplate.emit(true);
        this.router.navigate(['/']);
    } , err => {
      this.shared.token = '';
      this.shared.user = undefined;
      this.shared.showTemplate.emit(false);
      this.message = 'Erro ';
      
    });
  }

  cancelLogin(){
    this.message = '';
    this.user = new User('', '','', '');
    window.location.href = '/login';
    window.location.reload();
  }

  getFormGroupClass(isInvalid: boolean, isDirty:boolean): {} {
    return {
      'form-group': true,
      'has-error' : isInvalid  && isDirty,
      'has-success' : !isInvalid  && isDirty
    };
  }

}
