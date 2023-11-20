import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.css']
})
export class LinkedinComponent {

  @Input()
  public size: string = "20";

}
