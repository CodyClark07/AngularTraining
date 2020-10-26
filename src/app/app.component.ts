import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvel Heroes';

  constructor(
    private http: HttpClient
  ) {
    this.http.get('https://gateway.marvel.com:443/v1/public/')
  }
}
