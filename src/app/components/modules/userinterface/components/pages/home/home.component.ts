import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../partials/hero/hero.component';
import { IconComponent } from '../../partials/icon/icon.component';
import { AboutComponent } from '../about/about.component';
import { SlideCardComponent } from '../../partials/slide-card/slide-card.component';
import { CollapseBlogComponent } from '../../partials/collapse-blog/collapse-blog.component';
import { CtaComponent } from '../../partials/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    HeroComponent,CtaComponent,
    IconComponent,AboutComponent,SlideCardComponent,
    CollapseBlogComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
