import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HeroService } from "./services/hero.service";

import { AppComponent } from "./app.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";

@NgModule({
  declarations: [AppComponent, HeroDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
