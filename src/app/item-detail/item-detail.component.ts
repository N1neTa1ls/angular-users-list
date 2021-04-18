import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input()
  public user: User;
  @Output()
  private readonly closed: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

  public closeModal(): void {
    this.closed.emit();
  }
}
