import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectsFourComponent } from './section-projects-four.component';

describe('SectionProjectsFourComponent', () => {
  let component: SectionProjectsFourComponent;
  let fixture: ComponentFixture<SectionProjectsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectsFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjectsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
