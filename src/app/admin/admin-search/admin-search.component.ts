import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html'
})

export class AdminSearchComponent {
  @Input()
  admins: Admin[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private adminService: AdminService,
              private route: ActivatedRoute) {
  }

  performSearch(searchTerm: string): void {
    this.adminService.getAdminsByUsername(searchTerm).subscribe(
      admins => { this.onSearchited.emit(admins); },
      error => this.errorMessage = <any>error.message);
  }
}

