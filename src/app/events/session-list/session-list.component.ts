import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ISession } from "../event-details/event.model";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "../event-details/voter.service";

@Component({
  selector: "app-session-list",
  templateUrl: "./session-list.component.html",
  styleUrls: ["./session-list.component.css"]
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input()
  sessions: ISession[];
  @Input()
  filterBy: string;
  visibleSessions: ISession[] = [];

  constructor(
    private voterService: VoterService,
    private authService: AuthService
  ) {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }
  filterSessions(filter) {
    if (filter === "all") {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  ngOnInit() {}

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        session,
        this.authService.currentUser.userName
      );
    } else {
      this.voterService.addVoter(
        session,
        this.authService.currentUser.userName
      );
    }
  }
  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.authService.currentUser.userName
    );
  }
}
