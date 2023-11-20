import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-svg-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent {

  @Input()
  public size: string = "50";

}
