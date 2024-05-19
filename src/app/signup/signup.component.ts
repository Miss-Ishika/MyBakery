import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
  

}
