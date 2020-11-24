import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = ''
  constructor(
    private httpClient: HttpClient
  ) { }

  public getMarvelHeroes() {
    return this.httpClient.get<any>(`https://gateway.marvel.com/v1/public/characters?apikey=${this.API_KEY}&limit=100`)
  }

  public getMarvelHero(id) {

    return this.httpClient.get<any>(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${this.API_KEY}`)
  }
}
