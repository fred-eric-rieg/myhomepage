import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectsCrmComponent } from './section-projects-crm.component';

describe('SectionProjectsCrmComponent', () => {
  let component: SectionProjectsCrmComponent;
  let fixture: ComponentFixture<SectionProjectsCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectsCrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjectsCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
