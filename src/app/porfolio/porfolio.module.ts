import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioPageComponent } from './pages/porfolio-page/porfolio-page.component';
import { porfolioRoutingModule } from './porfolio-routing.module';
import { CardProjectComponent } from './components/card-project/card-project.component';



@NgModule({
  declarations: [
    PorfolioPageComponent,
    CardProjectComponent
  ],
  imports: [
    CommonModule,
    porfolioRoutingModule
  ]
})
export class PorfolioModule { }
