import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/v1/clients';
  constructor(private http: HttpClient) { }

  getClientsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getClient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createClient(client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateClient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  
  getClientsById(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
