import { Component, Input } from '@angular/core';
import { Projects } from '../../models/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'div[app-single-project]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {


  @Input() project!: Projects;


}
