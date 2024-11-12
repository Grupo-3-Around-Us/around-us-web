import { Event } from './../../../shared/models/event.model';
import { EventService } from './../../../core/services/event.service';
import { Component } from '@angular/core';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ActivatedRoute, ChildrenOutletContexts, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [NavbarCustomerComponent, CommonModule, FooterComponent, RouterLink],
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    const foundEvent = this.eventService.getEventById(eventId);
    this.event = foundEvent !== null ? foundEvent : undefined;
  }
}
