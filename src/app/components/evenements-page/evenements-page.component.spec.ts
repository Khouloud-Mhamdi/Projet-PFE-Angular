import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementsPageComponent } from './evenements-page.component';

describe('EvenementsPageComponent', () => {
  let component: EvenementsPageComponent;
  let fixture: ComponentFixture<EvenementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
