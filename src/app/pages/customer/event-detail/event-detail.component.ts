import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../core/services/event.service';
import { Event } from '../../../shared/models/event.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    const foundEvent = this.eventService.getEventById(eventId);
    this.event = foundEvent !== null ? foundEvent : undefined; // Asigna undefined si es null
  }
}
