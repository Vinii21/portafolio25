import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioPageComponent } from './pages/porfolio-page/porfolio-page.component';

const routes: Routes = [
  {
    path: "",
    component: PorfolioPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class porfolioRoutingModule { }
