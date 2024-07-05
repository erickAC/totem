import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class EscolhaService {
    constructor(private httpClient: HttpClient) { }
    
    salvar(tipo: string, id: number) {
        return this.httpClient.post<any>(`http://localhost:8080/salvar/${tipo}/${id}`, {});
    }

}