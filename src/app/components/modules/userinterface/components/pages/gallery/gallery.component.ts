import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksSectionComponent } from '../../partials/works-section/works-section.component';
import { CtaComponent } from '../../partials/cta/cta.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,WorksSectionComponent,CtaComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

}
