import { Component, OnInit } from "@angular/core";
import { Hero } from "./classes/hero";
import { HeroService } from "./services/hero.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}
  title = "Tour of Heroes";
  selectedHero: Hero;
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
