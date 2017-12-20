import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html'
})
export class AdminFormComponent implements OnInit {
  public admin: Admin;
  public adminForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private adminService: AdminService) {
    this.adminForm = fb.group({
      'username': ['Administrator username', Validators.required],
      'email': ['Administrator e-mail', Validators.email],
      'password': ['Administrator password', Validators.required],
    });
  }

  ngOnInit() {
    this.admin = new Admin();
  }

  onSubmit(): void {
    this.adminService.addAdmin(this.admin)
        .subscribe(
          admin => this.router.navigate([admin.uri]),
          error => {
            this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
          });
  }
}
