import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html'
})
export class AdminListComponent implements OnInit {
  public admins: Admin[] = [];
  public totalAdmins: number;
  public errorMessage = '';

  constructor(private userService: AdminService) {}

  ngOnInit() {
    this.userService.getAllAdmins()
      .subscribe(
        (admins: Admin[]) => {
          console.log(admins)
          this.admins = admins;
          this.totalAdmins = admins.length; },
        error => this.errorMessage = <any>error.message);
  }

  onSearch(admins) {
    this.admins = admins;
  }
}
