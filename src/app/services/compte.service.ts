import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl = 'http://localhost:8080/v1/comptes';

  constructor(private http: HttpClient) { }

  getComptesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCompte(numClient: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${numClient}`);
  }

  createCompte(compte: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, compte);
  }
  
  deleteCompte(numCompte: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${numCompte}`, { responseType: 'text' });
  }

  updateCompte(numCompte: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${numCompte}`, value);
  }
}
