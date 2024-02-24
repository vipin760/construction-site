import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IService } from 'src/app/components/store/interface/IProduct.interface';
import { serviceData } from 'src/app/components/store/data/data';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  serviceData:IService[]=serviceData

}
