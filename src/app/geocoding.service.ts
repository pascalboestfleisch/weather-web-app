import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private url = 'https://geocoding-api.open-meteo.com/v1/search';

  constructor(private http: HttpClient) {}

  getGeocode(cityName: string): Observable<any> {
    const params = {
      name: cityName,
      count: 1
    };
    return this.http.get(this.url, { params });
  }
}
