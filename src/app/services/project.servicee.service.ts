import { Injectable } from '@angular/core';
import { Projects } from '../models/projects';
import { projects } from '../data/projects.data';
import { AcademicTittles } from '../models/academic-titles';
import { tittles } from '../data/tittles.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceeService {

  constructor() { }

  getProjects(): Projects[]{
    return projects;
  }

  getTittles(): AcademicTittles[]{
    return tittles;
  }

}
