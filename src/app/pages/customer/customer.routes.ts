import { Routes } from '@angular/router';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { EventCatalogComponent } from './event-catalog/event-catalog.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { PreferenciasComponent } from './preferencias/preferencias.component';
import { ConfigPrivacyComponent } from './config-privacy/config-privacy.component';
import { ConfigSecurityComponent } from './config-security/config-security.component';
import { HomeComponent } from '../home/home.component';
import { ConfigLayoutComponent } from './config-layout/config-layout.component';
import { MicuentaLayoutComponent } from './micuenta-layout/micuenta-layout.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';


export const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: 'home',
        component: CustomerHomeComponent,
      },
      {
        path: 'event',
        children: [
          {path: 'catalog', component: EventCatalogComponent},
          {path: 'search', component: EventSearchComponent},
          {path: ':id', component: EventDetailComponent},
          {path: 'register-event/:id', component:FormRegistroComponent}
        ]
      },
      {
        path: 'myevents',
        component: EventListComponent,
      },
      {
        path: 'micuenta',
        component: MicuentaLayoutComponent,
        children: [
          {path: 'informacion-personal', component: InfoPersonalComponent},
          {path: 'preferencias', component: PreferenciasComponent},
        ]
      },
      {
        path: 'form-registro',
        component: FormRegistroComponent,
      },
      {
        path: 'config',
        component: ConfigLayoutComponent,
        children: [
          { path: 'privacy', component: ConfigPrivacyComponent },
          { path: 'security', component: ConfigSecurityComponent },
        ]
      }
    ]
  }
];
