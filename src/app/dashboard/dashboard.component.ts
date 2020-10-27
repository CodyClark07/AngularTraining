import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.apiService.getMarvelHeroes().subscribe(heroes => this.heroes = heroes.data.results.slice(1, 5));
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));

  }

}
