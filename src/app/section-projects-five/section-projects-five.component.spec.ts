import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectsFiveComponent } from './section-projects-five.component';

describe('SectionProjectsFiveComponent', () => {
  let component: SectionProjectsFiveComponent;
  let fixture: ComponentFixture<SectionProjectsFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectsFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjectsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
