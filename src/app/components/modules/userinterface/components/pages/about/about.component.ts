import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../partials/cta/cta.component';
import { AboutContainerCardComponent } from '../../partials/about-container-card/about-container-card.component';
import { AboutWorkPatternComponent } from '../../partials/about-work-pattern/about-work-pattern.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,CtaComponent,AboutContainerCardComponent,AboutWorkPatternComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
