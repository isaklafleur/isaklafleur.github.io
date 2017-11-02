import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import {
  InMemoryWebApiModule,
  HttpClientInMemoryWebApiModule,
} from "angular-in-memory-web-api";

// Services
import { InMemoryDataService } from "./in-memory-data.service";
import { HeroService } from "./services/hero.service";

// Components
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: true,
    }),
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
