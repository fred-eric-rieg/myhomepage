import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectsOneComponent } from './section-projects-one.component';

describe('SectionProjectsOneComponent', () => {
  let component: SectionProjectsOneComponent;
  let fixture: ComponentFixture<SectionProjectsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectsOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjectsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
