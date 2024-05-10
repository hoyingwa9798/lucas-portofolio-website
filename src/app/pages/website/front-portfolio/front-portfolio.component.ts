import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { GalleriaImage } from '@app/models/galleriaImage.model';

@Component({
  selector: 'app-front-portfolio',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './front-portfolio.component.html',
  styleUrl: './front-portfolio.component.scss'
})
export class FrontPortfolioComponent {

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
  bdaImages: GalleriaImage[] = [
    new GalleriaImage( "assets/bda-1.png"),
    new GalleriaImage( "assets/bda-2.png"),
    new GalleriaImage( "assets/bda-3.png"),
    new GalleriaImage( "assets/bda-4.png"),
    new GalleriaImage( "assets/bda-5.png"),
    new GalleriaImage( "assets/bda-6.png"),
    new GalleriaImage( "assets/bda-7.png"),
    new GalleriaImage( "assets/bda-8.png"),
    new GalleriaImage( "assets/bda-9.png"),
    new GalleriaImage( "assets/bda-10.png"),
    new GalleriaImage( "assets/bda-11.png")
  ];

  agbaImages: GalleriaImage[] = [
    new GalleriaImage( "assets/agba-1.png"),
    new GalleriaImage( "assets/agba-2.png"),
    new GalleriaImage( "assets/agba-3.png"),
    new GalleriaImage( "assets/agba-4.png"),
    new GalleriaImage( "assets/agba-5.png"),
    new GalleriaImage( "assets/agba-6.png"),
    new GalleriaImage( "assets/agba-7.png"),
    new GalleriaImage( "assets/agba-8.png"),
    new GalleriaImage( "assets/agba-9.png"),
    new GalleriaImage( "assets/agba-10.png"),
    new GalleriaImage( "assets/agba-11.png"),
    new GalleriaImage( "assets/agba-12.png"),
    new GalleriaImage( "assets/agba-13.png"),
    new GalleriaImage( "assets/agba-14.png"),
    new GalleriaImage( "assets/agba-15.png"),
    new GalleriaImage( "assets/agba-16.png"),
  ];


}
