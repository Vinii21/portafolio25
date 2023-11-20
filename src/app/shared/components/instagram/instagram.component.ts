import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-svg-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {

  @Input()
  public size: string = "20";

}
