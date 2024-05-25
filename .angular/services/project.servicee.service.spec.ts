import { TestBed } from '@angular/core/testing';

import { ProjectServiceeService } from './project.servicee.service';

describe('ProjectServiceeService', () => {
  let service: ProjectServiceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectServiceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
