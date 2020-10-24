import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private apiService: ApiService
  ) { }


  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    // this.getHeroes();
    this.apiService.getMarvelHeroes().subscribe((heroes) => {
      console.log(heroes.data.results);
      this.heroes = heroes.data.results;
      console.log(this.heroes);


    })
  }

}
