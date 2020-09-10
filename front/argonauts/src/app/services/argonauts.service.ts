import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { Argonaut } from '../models/argonaut.model';

@Injectable({
    providedIn: 'root'
})
export class ArgonautsService {

    private baseUrl = 'http://localhost:3000/argonauts';

    constructor(private http: HttpClient, private router: Router) {
    }

    getAllArgonauts(): Observable<any> {
        return from(this.http.get(`${this.baseUrl}`));
    }

    putArgonaut(argonaut: Argonaut, id: number): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, argonaut);
    }

    postArgonaut(argonauts: Argonaut): Observable<any> {
        return this.http.post(`${this.baseUrl}`, argonauts);
    }

    getArgonauteById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    deleteArgonaut(id: number): Observable<any> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url);
    }

}
