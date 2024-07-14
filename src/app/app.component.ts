import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherControllerComponent } from './weather-controller/weather-controller.component';
import { GeocodingHandlerComponent } from "./geocoding-handler/geocoding-handler.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherControllerComponent, GeocodingHandlerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'weather-date';
}
