import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData:any = {}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData).subscribe(
       res => {
         console.log(res);
         localStorage.setItem('token', res.token);
         this._router.navigate(['/event']);
        },
       err => console.log("heh")
     )
  }

}
