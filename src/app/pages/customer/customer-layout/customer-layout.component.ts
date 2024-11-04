import { Component } from '@angular/core';
import { InfoPersonalComponent } from '../info-personal/info-personal.component';

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [InfoPersonalComponent],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent {

}
