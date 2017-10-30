import { SpyObject } from '../helper';
import { AdminService } from '../../app/admin/admin.service';

export class MockAdminService extends SpyObject {
  fakeResponse;
  getAllAdmins;
  getAdmin;

  constructor() {
    super(AdminService);

    this.fakeResponse = null;
    this.getAllAdmins = this.spy('getAllAdmins').andReturn(this);
    this.getAdmin = this.spy('getAdmin').andReturn(this);
  }

  subscribe(callback) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }

  getProviders(): Array<any> {
    return [{ provide: AdminService, useValue: this }];
  }
}
