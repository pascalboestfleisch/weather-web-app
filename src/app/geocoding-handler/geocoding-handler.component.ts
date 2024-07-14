import { Component } from '@angular/core';
import { GeocodingService } from '../geocoding.service';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-geocoding-handler',
  templateUrl: './geocoding-handler.component.html',
  styleUrls: ['./geocoding-handler.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class GeocodingHandlerComponent {
  cityName: string = '';
  geoData: any;
  weatherData: any;

  constructor(private geocodingService: GeocodingService, private weatherService: WeatherService) {}

  searchCity(): void {
      this.geocodingService.getGeocode(this.cityName).subscribe(data => {
        if (data && data.results && data.results.length > 0) {
          this.geoData = data.results[0];
          this.fetchWeather(this.geoData.latitude, this.geoData.longitude);
        } else {
          this.geoData = null;
          this.weatherData = null;
        }
      });
  }

  fetchWeather(latitude: number, longitude: number): void {
    this.weatherService.fetchWeather(latitude, longitude).subscribe(data => {
      this.weatherData = data;
    });
  }
}
