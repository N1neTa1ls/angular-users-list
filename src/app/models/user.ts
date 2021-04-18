import { Status } from "./status";
import { IUser } from "./user.model";
import { setAttribute } from "./utils";

export class User {
  public avatar: string;

  public balance: number;

  public fname: string;

  public id: number;

  public lastUpdatedAt: string;

  public mname: string;

  public name: string;

  public status: number;

  public fullName: string;

  public currentStatus: string;

  constructor(value?: IUser) {
    if (value) {
      setAttribute(value, this, 'avatar');
      setAttribute(value, this, 'balance');
      setAttribute(value, this, 'fname');
      setAttribute(value, this, 'id');
      setAttribute(value, this, 'lastUpdatedAt');
      setAttribute(value, this, 'mname');
      setAttribute(value, this, 'name');
      setAttribute(value, this, 'status');
    }

    this.fullName = `${this.fname ?? ''} ${this.name ? this.name[0] + '.' : ''} ${this.mname ? this.mname[0] + '.' : ''}`.trim();

    this.currentStatus = this.status === 0 ? Status.STOPED : this.status === 1 ? Status.ACTIVE : Status.BLOCKED;
  }
}
