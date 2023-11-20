import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioPageComponent } from './pages/porfolio-page/porfolio-page.component';
import { porfolioRoutingModule } from './porfolio-routing.module';



@NgModule({
  declarations: [
    PorfolioPageComponent
  ],
  imports: [
    CommonModule,
    porfolioRoutingModule
  ]
})
export class PorfolioModule { }
