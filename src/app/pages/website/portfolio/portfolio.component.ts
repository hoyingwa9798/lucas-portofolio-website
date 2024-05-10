import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPortfolioComponent } from '../front-portfolio/front-portfolio.component';
import { BackPortfolioComponent } from '../back-portfolio/back-portfolio.component';
import { DataPortfolioComponent } from '../data-portfolio/data-portfolio.component';
import { CloudPortfolioComponent } from '../cloud-portfolio/cloud-portfolio.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FrontPortfolioComponent, BackPortfolioComponent, DataPortfolioComponent, CloudPortfolioComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  selectedPortfolioType: string = "frontend";
  portfolioType: string[] = ["frontend", "backend", "data", "cloud"];

  selectType(type: string): void {
    this.selectedPortfolioType = type;
  }

  constructor(private elementRef: ElementRef) {}

  scrollTo() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
