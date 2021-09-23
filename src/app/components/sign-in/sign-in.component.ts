import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebSocketService } from '../../services/web-socket.service';
import { SignIn } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signIn = new SignIn();

  constructor(
    private userService: UserService, 
    private router: Router, 
    private webSocketService:WebSocketService,
  ) { }

  ngOnInit(): void {
  }

  onSignIn(): void {
    this.userService.signIn(this.signIn)
    .subscribe(
      data => {
        console.log(data);
        this.webSocketService.setupSocketConnection();
        localStorage.setItem('auth-token', data.token);
        localStorage.setItem('user_id', data.travelerID);
        this.router.navigate(['/user-feed']);
        console.log("OK");
      }, 
      error => console.log(error)
    );
    console.log(this.signIn);
  }

}
