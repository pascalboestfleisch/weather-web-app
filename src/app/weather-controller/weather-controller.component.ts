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
  latitude: number = 0;
  longitude: number = 0;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.fetchWeather();
  }

  fetchWeather(): void {
    this.weatherService.fetchWeather(this.latitude, this.longitude).subscribe(data => {
      this.weatherData = data;
    });
  }
}

