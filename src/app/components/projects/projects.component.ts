import { Component, OnInit } from '@angular/core';
import { ProjectServiceeService } from '../../services/project.servicee.service';
import { Projects } from '../../models/projects';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SingleProjectComponent } from '../single-project/single-project.component';


@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule, FormsModule, SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = [];
  selectedCategory!: string;

  constructor(private projectService: ProjectServiceeService){}
  ngOnInit(): void {
    
    this.projects = this.projectService.getProjects();
    console.log(this.selectedCategory)

  }








}
