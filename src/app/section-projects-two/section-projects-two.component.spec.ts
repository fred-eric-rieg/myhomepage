import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectsTwoComponent } from './section-projects-two.component';

describe('SectionProjectsTwoComponent', () => {
  let component: SectionProjectsTwoComponent;
  let fixture: ComponentFixture<SectionProjectsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjectsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
