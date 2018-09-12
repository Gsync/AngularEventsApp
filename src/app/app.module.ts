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
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { NotFound404Component } from "./errors/not-found404/not-found404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventListResolverService } from "./events/shared/event-list-resolver.service";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateSessionComponent } from './events/create-session/create-session.component';
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventCardComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFound404Component,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventListResolverService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event, do you really want to cancel?"
    );
  }
  return true;
}
