import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLayersComponent } from './second-layers.component';

describe('SecondLayersComponent', () => {
  let component: SecondLayersComponent;
  let fixture: ComponentFixture<SecondLayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondLayersComponent]
    });
    fixture = TestBed.createComponent(SecondLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
