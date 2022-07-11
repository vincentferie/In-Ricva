import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from  '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: UntypedFormGroup;
  submitted:any
  slides = [
    {image: 'assets/image/internet1.jpg',text: 'BIENVENUE SUR RICVARICVA'},
    {image: 'assets/image/internet2.jpg',text: 'BIENVENUE SUR RICVARICVA '},
    {image: 'assets/image/internet3.jpg',text: 'BIENVENUE SUR RICVARICVA '}
 ];
 noWrapSlides = false;
 showIndicator = true;
  
  

  constructor(
    private formBuilder: UntypedFormBuilder,    
    private router: Router,
    private activatedRoute : ActivatedRoute 
    ) { }

  ngOnInit(): void {    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],  
      password: ['', Validators.required]
    });
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }

    this.router.navigate(['/app/dashboard'], {
      relativeTo: this.activatedRoute,
      skipLocationChange: false
    })
  }

}
