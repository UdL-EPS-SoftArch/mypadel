import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html'
})
export class AdminEditComponent implements OnInit {
  public admin: Admin;
  public adminForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private adminService: AdminService) {
    this.adminForm = fb.group({
      'username': [{value: '', disabled: true}, Validators.required],
      'email': [Validators.email],
    });
  }

  ngOnInit() {
    this.admin = new Admin();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.adminService.getAdmin(id).subscribe(
          admin => this.admin = admin,
          error => this.errorMessage = <any>error.message));
  }

  onSubmit(): void {
    this.adminService.updateAdmin(this.admin)
        .subscribe(
          admin => this.router.navigate([admin.uri]),
          error => this.errorMessage =
            error.errors ? <any>error.errors[0].message : <any>error.message);
  }
}
