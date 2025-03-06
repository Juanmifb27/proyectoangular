import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Irawg } from './irawg';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RawgService {
  private baseUrl = 'https://api.rawg.io/api/games?key=413c252f5300430ea20277c38ca11901';


  constructor(private httpClient: HttpClient) { }
  
    getBaseUrl(): string {
      return this.baseUrl;
    }
  
    getJuegos(url?: string): Observable<Irawg> {
      const apiUrl = url ? url : this.baseUrl;
      return this.httpClient.get<Irawg>(apiUrl);
    }
    
  
    buscarJuegos(query: string, ordering: string = ''): Observable<Irawg> {
      let apiUrl = `${this.baseUrl}&search=${query}`;
    
      if (ordering) {
        apiUrl += `&ordering=${ordering}`;
      }
    
      return this.httpClient.get<Irawg>(apiUrl);
    }
}
