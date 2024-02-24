import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../../partials/map/map.component';
import { CtaComponent } from '../../partials/cta/cta.component';
import { ContactCardComponent } from '../../partials/contact-card/contact-card.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,MapComponent,CtaComponent,ContactCardComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
