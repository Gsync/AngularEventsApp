import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { EventService } from "../shared/event.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params["id"]);
    if (!eventExists) {
      this.router.navigate(["/404"]);
    }
    return eventExists;
  }
}
