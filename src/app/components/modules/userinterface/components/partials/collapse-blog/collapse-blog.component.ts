import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-collapse-blog',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './collapse-blog.component.html',
  styleUrls: ['./collapse-blog.component.css']
})
export class CollapseBlogComponent {

}
