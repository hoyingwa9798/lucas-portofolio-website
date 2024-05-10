import { Component, ElementRef } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Skill } from '@app/models/skill.model';
//import { Skill } from '../../../models/skill.model';

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.scss'
})
export class TechnicalSkillsComponent {
  skills: Skill[] = [
    new Skill(1, 'Programming Languages', 'SQL, Python, R, Java, Kotlin, TypeScript, JavaScript, CSS, SCSS, HTML5'),
    new Skill(2, 'Frameworks & Libraries', 'Spring, Spring Boot, React.js, React Native, Node.js, Redux, Vue.js, Bootstrap, Angular, Node.js'),
    new Skill(3, 'Database', 'MySQL, Oracle, MSSQL'),
    new Skill(4, 'Cloud Platform', 'Azure, AWS, Google Cloud Apigee, Google Cloud Platform, Firebase'),
    new Skill(5, 'Applications & Tools', 'Postman, Microsoft Excel, Azure Sandbox, Google Sheet, Xcode, Docker, Tableau, Figma'),
    new Skill(6, 'Tools', 'Google Workspace, RDBMS, IBM Cognos Analytics, Jupyter, SQLite'),
    new Skill(7, 'Operating Systems', 'Windows 10, Linux'),
    new Skill(8, 'Project Management Fundamentals', 'Agile, Waterfall, Scrum, Kanban, Trello'),
    new Skill(9, 'Languages', 'English, Mandarin and Cantonese'),
  ];

  constructor(private elementRef: ElementRef) {}

  scrollTo() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
