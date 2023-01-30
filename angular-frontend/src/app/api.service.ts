import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Map } from 'src/app/types/map.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  API_URL = 'http://localhost:3000/';

  getAllMaps(): Observable<Map[]> {
    return this.http.get<Map[]>(this.API_URL);
  }

  //TODO: change any types
  getMap(id: number): Observable<any> {
    const url = `${this.API_URL}${id}`;
    return this.http.get<any>(url);
  }

  createMap(data: any): Observable<Map> {
    return this.http.post<Map>(this.API_URL, data, httpOptions);
  }

  deleteMap(name: string): Observable<{}> {
    return this.http.delete(`${this.API_URL}${name}`);
  }

  updateProject(map: Map, name: string): Observable<{}> {
    return this.http.put(`${this.API_URL}${name}`, map);
  }
}
