import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolleyPageComponent } from './volley-page.component';

describe('VolleyPageComponent', () => {
  let component: VolleyPageComponent;
  let fixture: ComponentFixture<VolleyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolleyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolleyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
