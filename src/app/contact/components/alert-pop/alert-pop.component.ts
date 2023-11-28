import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-alert-pop',
  templateUrl: './alert-pop.component.html',
  styleUrls: ['./alert-pop.component.css']
})
export class AlertPopComponent {

  @Input()
  public activeClassAlertPop: boolean = false;

}
