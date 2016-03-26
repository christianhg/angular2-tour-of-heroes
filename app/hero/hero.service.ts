import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()

export class HeroService {
  public getHeroes() {
    return Promise.resolve(HEROES);
  }

  public getHero(id: number) {
    return Promise.resolve(HEROES)
      .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}
