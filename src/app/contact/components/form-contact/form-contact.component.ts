import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {

  @Output()
  public showAlert : EventEmitter<boolean> = new EventEmitter();

  public activeClass: boolean = false;
  public  activeDisabled: boolean = false;

  public contactForm: FormGroup = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    subject: ["", Validators.required],
    message: ["", Validators.required]
  });

  constructor (private fb: FormBuilder) {}

  OnSubmit():void {

    if(
      this.contactForm.controls["name"].errors ||
      this.contactForm.controls["email"].errors ||
      this.contactForm.controls["subject"].errors ||
      this.contactForm.controls["message"].errors
      ) {
      this.activeClass = true;
      this.showAlert.emit(this.activeClass);
      this.activeDisabled = true;
      setTimeout(()=>{
        this.activeClass = false;
        this.showAlert.emit(this.activeClass);
        this.activeDisabled = false;
      }, 5000)
      return;
    }

    /* TODO: ENVIAR CORREO ELECTRONICO */


  }

}
