import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardData } from 'src/app/components/store/data/data';
import { IBlogCard } from 'src/app/components/store/interface/IProduct.interface';

@Component({
  selector: 'app-slide-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.css']
})
export class SlideCardComponent {
  blogData:IBlogCard[]=BlogCardData;
}
