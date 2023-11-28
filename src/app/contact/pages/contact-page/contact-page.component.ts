import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  public stateAlert: boolean = false;

  public showAlert(value: boolean): void {
    this.stateAlert = value;
  }
}
