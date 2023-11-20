import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-svg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  public size: string = "50";

}
