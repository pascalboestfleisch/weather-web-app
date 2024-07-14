import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  fetchWeather(latitude: number, longitude: number): Observable<any> {
    const params = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      current_weather: 'true',
      hourly: 'temperature_2m,precipitation',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min'
    };

    return this.http.get(this.url, { params }).pipe(
      map(response => this.processResponse(response))
    );
  }

  private processResponse(response: any): any {
    const { current_weather, hourly, daily } = response;

    const weatherData = {
      current: {
        time: new Date(current_weather.time),
        temperature: current_weather.temperature,
        weatherCode: current_weather.weather_code,
        windSpeed: current_weather.wind_speed,
        windDirection: current_weather.wind_direction
      },
      hourly: {
        time: hourly.time.map((t: string) => new Date(t)),
        temperature: hourly.temperature_2m,
        precipitation: hourly.precipitation
      },
      daily: {
        time: daily.time.map((t: string) => new Date(t)),
        weatherCode: daily.weather_code,
        temperatureMax: daily.temperature_2m_max,
        temperatureMin: daily.temperature_2m_min
      }
    };

    return weatherData;
  }
}
