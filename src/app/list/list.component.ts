import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AppService } from '../app.service';
import { Status } from '../models/status';
import { User } from '../models/user';
import { TABS } from '../models/tabs';
import { ITab } from '../models/tabs.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public users: User[];

  public filteredUsers: User[];

  public statuses: string[] = [];

  public currentTab = 0;

  public tabs = TABS;

  public selectedUser: User;

  public modalVisible = false;

  constructor(
    private readonly _appService: AppService
  ) { }

  ngOnInit(): void {
    for (const key in Status) {
      if (Object.prototype.hasOwnProperty.call(Status, key)) {
        this.statuses.push(Status[key]);
      }
    }

    this._appService.getUsers().subscribe(data => {
      this.filteredUsers = this.users = data;
    });
  }

  public changeTab(tab: ITab): void {
    this.currentTab = tab.id;

    if (tab.statusId !== undefined) {
      this.filteredUsers = this.users.filter(el => el.status === tab.statusId);
    } else {
      this.filteredUsers = this.users;
    }
  }

  public showModal(user): void {
    this.selectedUser = user;
    this.modalVisible = true;
  }

  public hideModal(): void {
    this.modalVisible = false;
  }

  public trackById(_: number, item: User): number {
    return item.id;
  }
}
