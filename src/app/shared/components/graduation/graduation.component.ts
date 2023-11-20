import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-svg-graduation',
  templateUrl: './graduation.component.html',
  styleUrls: ['./graduation.component.css']
})
export class GraduationComponent {

  @Input()
  public size: string = "50";

}
