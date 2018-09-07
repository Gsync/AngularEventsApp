import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-card",
  templateUrl: "./event-card.component.html",
  styleUrls: ["./event-card.component.css"]
})
export class EventCardComponent implements OnInit {
  event: any = {
    id: 1,
    name: "Angular Connect",
    date: "7/2/2019",
    time: "10:00 am",
    price: 400.0,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "Calgary",
      country: "Canada"
    }
  };
  constructor() {}

  ngOnInit() {}
}
