import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { switchMap } from "rxjs/operators";
import { Hero } from "../../classes/hero";

import { HeroService } from "../../services/hero.service";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero).then(() => this.goBack());
  }

  ngOnInit() {
    console.log(this.route.paramMap);
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.heroService.getHero(+params.get("id")),
        ),
      )
      .subscribe(hero => (this.hero = hero));
  }
}
