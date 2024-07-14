import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherControllerComponent } from './weather-controller.component';

describe('WeatherControllerComponent', () => {
  let component: WeatherControllerComponent;
  let fixture: ComponentFixture<WeatherControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
