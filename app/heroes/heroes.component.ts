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
  private heroes: Hero[];
  private selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  public gotoDetail(): void {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
