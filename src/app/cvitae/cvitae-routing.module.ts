import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvitaePageComponent } from './pages/cvitae-page/cvitae-page.component';

const routes: Routes = [
  {
    path: "",
    component: CvitaePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class cVitaeRoutingModule { }
