import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from '../hero/hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../hero/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes/heroes.component.html',
  styleUrls: ['app/heroes/heroes.component.css'],
  directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
