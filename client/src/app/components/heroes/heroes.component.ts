import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Hero } from "../../classes/hero";
import { HeroService } from "../../services/hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router) {}
  heroes: Hero[];
  title = "Tour of Heroes";
  selectedHero: Hero;
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => (this.heroes = heroes));
  }

  gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
