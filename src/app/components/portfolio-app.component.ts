import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { AcademicDegreesComponent } from './academic-degrees/academic-degrees.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent, AboutMeComponent, ProjectsComponent, AcademicDegreesComponent, SkillsComponent, FooterComponent],
  templateUrl: './portfolio-app.component.html',
  styleUrl: './portfolio-app.component.scss'
})
export class PortfolioAppComponent {

}
