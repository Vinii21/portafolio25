import { Component } from '@angular/core';

@Component({
  selector: 'shared-swith-mode',
  templateUrl: './swith-mode.component.html',
  styleUrls: ['./swith-mode.component.css']
})
export class SwithModeComponent {

  public activeMode: boolean = true;

  public HandleActiveMode():void {
    this.activeMode = !this.activeMode;
  };

}
