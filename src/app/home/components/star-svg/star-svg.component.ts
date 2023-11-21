import { Component, Input } from '@angular/core';
import { settingStar } from '../../interfaces/setting-star.interface';

@Component({
  selector: 'home-star-svg',
  templateUrl: './star-svg.component.html',
  styleUrls: ['./star-svg.component.css']
})
export class StarSvgComponent {

  @Input()
  public settings: settingStar = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    fill: "#fff",
    size: "25px"
  }

}
