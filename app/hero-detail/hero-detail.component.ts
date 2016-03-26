import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from '../hero/hero';
import {HeroService} from '../hero/hero.service';

@Component({
  inputs: ['hero'],
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail/hero-detail.component.html',
  styleUrls: ['app/hero-detail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams
  ) {

  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
