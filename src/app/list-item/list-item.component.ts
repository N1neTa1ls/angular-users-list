import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input()
  public user: User;

  @Input()
  public statuses: string[] = [];

  public popoverVisible = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

  public showPopover(): void {
    this.popoverVisible = true; 
  }

  public hidePopover(): void {
    this.popoverVisible = false;
  }
}
