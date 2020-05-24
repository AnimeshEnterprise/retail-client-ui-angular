import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from '../../model/unit/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9090/';
  }


  public findAll(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.baseUrl + 'units');
  }

  public saveUnit(unit: Unit): Observable<Unit> {
    return this.http.post<Unit>('http://localhost:9090/unit', unit);
  }

  public getUnit(unitId): Observable<Unit> {
    return this.http.get<Unit>(this.baseUrl + 'unit/' + unitId);
  }
}
