import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectsThreeComponent } from './section-projects-three.component';

describe('SectionProjectsThreeComponent', () => {
  let component: SectionProjectsThreeComponent;
  let fixture: ComponentFixture<SectionProjectsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectsThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjectsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
