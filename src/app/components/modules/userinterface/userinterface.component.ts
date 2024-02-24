import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/pages/home/home.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';

@Component({
  selector: 'app-userinterface',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HomeComponent,HeaderComponent,FooterComponent],
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.css']
})
export class UserinterfaceComponent {

}
