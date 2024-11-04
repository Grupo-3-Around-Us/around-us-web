import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { EventCatalogComponent } from './event-catalog/event-catalog.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { PreferenciasComponent } from './preferencias/preferencias.component';

export const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: 'events/catalog',
        component: EventCatalogComponent,
      },
      {
        path: 'events/search',
        component: EventSearchComponent,
      },
      {
        path: 'events/:id',
        component: EventDetailComponent,
      },
      {
        path: 'myevents',
        component: EventListComponent,
      },
      {
        path: 'micuenta/informacion-personal',
        component: InfoPersonalComponent
      },
      {
        path: 'micuenta/preferencias',
        component: PreferenciasComponent,
      },
    ]
  }
];
