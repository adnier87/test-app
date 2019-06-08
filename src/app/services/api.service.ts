import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from "../includes/Client";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    apiURL = 'http://187.188.122.85:8091';

    public first: string = '';
    public next: string = '';
    public prev: string = '';
    public last: string = '';
    public current: string = '';

  constructor(private httpClient: HttpClient) { }

  public createClient(client: any){
    return this.httpClient.post(`${this.apiURL}/NutriNET/Cliente`, client);
  }

  public updateClient(data: any, id: number){
    const token = localStorage.getItem('access_token');
    return this.httpClient.put(`${this.apiURL}/NutriNET/Cliente/${id}`, data);
  }

  public getClients(url?: string){

    return this.httpClient.get<Client[]>(`${this.apiURL}/NutriNET/Cliente`,{ observe: 'response' }).pipe(tap(res => {
      console.log(res);
    }));

  }
}
