import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html'
})
export class AdminDetailComponent implements OnInit {
  public admin: Admin = new Admin();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
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
}
