import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvitaePageComponent } from './pages/cvitae-page/cvitae-page.component';
import { cVitaeRoutingModule } from './cvitae-routing.module';



@NgModule({
  declarations: [
    CvitaePageComponent
  ],
  imports: [
    CommonModule,
    cVitaeRoutingModule
  ]
})
export class CvitaeModule { }
