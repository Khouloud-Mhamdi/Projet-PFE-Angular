import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineSectionComponent } from './discipline-section.component';

describe('DisciplineSectionComponent', () => {
  let component: DisciplineSectionComponent;
  let fixture: ComponentFixture<DisciplineSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplineSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
