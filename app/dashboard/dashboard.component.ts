import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from '../hero/hero';
import {HeroService} from '../hero/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  public ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

  public gotoDetail(hero: Hero): void {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }
}
