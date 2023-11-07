import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLayersComponent } from './first-layers.component';

describe('FirstLayersComponent', () => {
  let component: FirstLayersComponent;
  let fixture: ComponentFixture<FirstLayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstLayersComponent]
    });
    fixture = TestBed.createComponent(FirstLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
