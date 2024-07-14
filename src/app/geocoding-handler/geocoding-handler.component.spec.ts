import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocodingHandlerComponent } from './geocoding-handler.component';

describe('GeocodingHandlerComponent', () => {
  let component: GeocodingHandlerComponent;
  let fixture: ComponentFixture<GeocodingHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeocodingHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeocodingHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
