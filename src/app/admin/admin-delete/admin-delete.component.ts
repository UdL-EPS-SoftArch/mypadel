import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html'
})
export class AdminDeleteComponent implements OnInit {
  public admin: Admin = new Admin();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private adminService: AdminService) {
  }

  ngOnInit() {
    this.route.params
    .map(params => params['id'])
    .subscribe((id) => {
        this.adminService.getAdmin(`${id}`).subscribe(
          admin => this.admin = admin,
          error => this.errorMessage = <any>error.message);
      }
    );
  }

  deleteAdmin() {
    this.adminService.deleteAdmin(this.admin).subscribe(
      result => this.router.navigate(['admins']),
      error => this.errorMessage = <any>error.message);
  }
}
