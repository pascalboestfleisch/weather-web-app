import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-controller',
  templateUrl: './weather-controller.component.html',
  styleUrls: ['./weather-controller.component.css'],
  imports: [DatePipe, CommonModule],
  standalone: true
})
export class WeatherControllerComponent implements OnInit {
  weatherData: any;
  latitude: number = 0; // Initialize with default values
  longitude: number = 0;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // Assume latitude and longitude are set before calling fetchWeather
    this.fetchWeather();
  }

  fetchWeather(): void {
    // Call fetchWeather with latitude and longitude
    this.weatherService.fetchWeather(this.latitude, this.longitude).subscribe(data => {
      this.weatherData = data;
    });
  }
}

