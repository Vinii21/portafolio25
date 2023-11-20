import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-svg-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  @Input()
  public size: string = "50";

}
