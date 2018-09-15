import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[app-modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input()("app-modal-trigger")
  modalId: string;
  constructor(elRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = elRef.nativeElement;
  }
  ngOnInit() {
    this.el.addEventListener("click", e => {
      this.$("#simple-modal").modal({});
    });
  }
}
