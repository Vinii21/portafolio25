import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { AboutMeRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    AboutMePageComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModuleModule { }
