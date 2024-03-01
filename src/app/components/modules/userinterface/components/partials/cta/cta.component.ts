import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent {

  @Input()
  imageUrl:string="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoaBe2ktaSE_zQacm-6bqPJ_kpzCriEOTyyWVx4FG2TukyK9mEnKSuUWHtqh2jwMjyiOPSx-OSOmY7hSHRRcUbY_gbRL_zTr8S-5s3nJnNR7vbLaST2XKUhl4ZG4onFwfIjIYZyJ0Yyd4TLJf9qQ5wBkavHeKus1kB9ms80PYi_MYpTGjHCX15kraKpYk/s320/IMG-20240226-WA0000.jpg"

  @Input()
  routerLink:string='/gallery'
}
