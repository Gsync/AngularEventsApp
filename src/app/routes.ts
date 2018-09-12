import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { NotFound404Component } from "./errors/not-found404/not-found404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventListResolverService } from "./events/shared/event-list-resolver.service";
import { CreateSessionComponent } from "./events/create-session/create-session.component";

export const appRoutes: Routes = [
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventListResolverService }
  },
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  { path: "events/session/new", component: CreateSessionComponent },
  { path: "404", component: NotFound404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "user", loadChildren: "./user/user/user.module#UserModule" }
];
