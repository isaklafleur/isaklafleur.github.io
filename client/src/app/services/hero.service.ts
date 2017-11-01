import { Injectable } from "@angular/core";
import { Hero } from "../classes/hero";
import { HttpClient } from "@angular/common/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class HeroService {
  private heroesUrl = "api/heroes"; // URL to web api
  constructor(private http: HttpClient) {}

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response["data"] as Hero)
      .catch(this.handleError);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http
      .get(this.heroesUrl)
      .toPromise()
      .then(response => response["data"] as Hero[])
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, hero)
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, { name: name })
      .toPromise()
      .then(response => response["data"] as Hero)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
