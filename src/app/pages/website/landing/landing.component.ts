import { Component, ViewChild } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TechnicalSkillsComponent } from '../technical-skills/technical-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [AboutMeComponent, ExperienceComponent, TechnicalSkillsComponent, PortfolioComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  @ViewChild(AboutMeComponent)
  aboutMeComponent!: AboutMeComponent;

  @ViewChild(PortfolioComponent)
  portfolioComponent!: PortfolioComponent;

  @ViewChild(TechnicalSkillsComponent)
  technicalSkillsComponent!: TechnicalSkillsComponent;

  scrollToAboutMe() {
    this.aboutMeComponent.scrollTo();
  }

  scrollToPortfolio() {
    this.portfolioComponent.scrollTo();
  }

  scrollToTechnicalSkills() {
    this.technicalSkillsComponent.scrollTo();
  }
}
