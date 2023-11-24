import { Component, Input } from '@angular/core';

@Component({
  selector: 'porfolio-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {

  @Input()
  public urlImage!: string;

}

