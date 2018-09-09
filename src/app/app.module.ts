import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventCardComponent } from "./events/event-card/event-card.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { EventService } from "./events/shared/event.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventCardComponent,
    NavbarComponent,
    EventDetailsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
