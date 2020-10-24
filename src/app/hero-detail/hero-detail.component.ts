import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private ApiService: ApiService

  ) { }

  ngOnInit(): void {
    // this.getMarvelHeroes();
    this.getHero();
  }
  getHero(): void {
    debugger
    const id = +this.route.snapshot.paramMap.get('id');
    this.ApiService.getMarvelHero(id).subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}


