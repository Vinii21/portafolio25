import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-svg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input()
  public size: string = "50";

}
