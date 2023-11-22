import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-svg-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {

  @Input()
  public size: string = "20";

  @Input()
  public about: boolean = false;

}
