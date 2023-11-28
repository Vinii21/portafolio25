import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactRoutingModule } from './contact-routing.module';
import { InfoContactComponent } from './components/info-contact/info-contact.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { IconWhatsappSvgComponent } from './components/icon-whatsapp-svg/icon-whatsapp-svg.component';
import { IconEmailSvgComponent } from './components/icon-email-svg/icon-email-svg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertPopComponent } from './components/alert-pop/alert-pop.component';



@NgModule({
  declarations: [
    ContactPageComponent,
    InfoContactComponent,
    FormContactComponent,
    IconWhatsappSvgComponent,
    IconEmailSvgComponent,
    AlertPopComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
