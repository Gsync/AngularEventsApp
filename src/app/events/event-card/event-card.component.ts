import { Component, OnInit, Input } from "@angular/core";
import { IEvent } from "../event-details/event.model";

@Component({
  selector: "app-event-card",
  templateUrl: "./event-card.component.html",
  styleUrls: ["./event-card.component.css"]
})
export class EventCardComponent implements OnInit {
  @Input()
  event: IEvent;

  constructor() {}
  ngOnInit() {}
}
