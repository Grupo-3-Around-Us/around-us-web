import { CommonModule } from '@angular/common';
import { Event } from './../../models/event.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card-1.component.html',
  styleUrl: './event-card-1.component.css'
})
export class EventCard1Component {
  @Input() event: Event = {} as Event;
}
