import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { GalleriaImage } from '@app/models/galleriaImage.model';

@Component({
  selector: 'app-data-portfolio',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './data-portfolio.component.html',
  styleUrl: './data-portfolio.component.scss'
})
export class DataPortfolioComponent {
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  dataImages: GalleriaImage[] = [
    new GalleriaImage( "assets/data-1.png"),
    new GalleriaImage( "assets/data-2.png"),
    new GalleriaImage( "assets/data-3.png"),
  ];
}
