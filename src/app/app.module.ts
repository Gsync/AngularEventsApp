import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventCardComponent } from './events/event-card/event-card.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, EventsListComponent, EventCardComponent, NavbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
