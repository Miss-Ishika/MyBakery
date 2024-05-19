import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
    // constructor(private router: Router) {}
    constructor(private router: Router) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
