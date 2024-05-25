import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectServiceeService } from '../../services/project.servicee.service';
import { AcademicTittles } from '../../models/academic-titles';

@Component({
  selector: 'academic-degrees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academic-degrees.component.html',
  styleUrl: './academic-degrees.component.scss'
})
export class AcademicDegreesComponent implements OnInit {

  tittles: AcademicTittles[]= [];

  constructor(private projectService: ProjectServiceeService){}
  ngOnInit(): void {
    this.tittles = this.projectService.getTittles();
  }





}
