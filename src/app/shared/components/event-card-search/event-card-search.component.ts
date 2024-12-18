import { UserService } from './../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { Event } from './../../models/event.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card-search.component.html',
  styleUrl: './event-card-search.component.css'
})
export class EventCardSearchComponent {

  @Input() event: Event = {} as Event;
  @Input() registered: boolean = false;
  constructor(private userService:UserService){}
  unRegister(){
    this.userService.unRegisterEvent(this.event);
  }
}
