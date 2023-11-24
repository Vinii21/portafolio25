import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { AboutMeRoutingModule } from './about-routing.module';
import { DevToolsComponent } from './components/dev-tools/dev-tools.component';
import { SharedModule } from '../shared/shared.module';
import { InterestComponent } from './components/interest/interest.component';



@NgModule({
  declarations: [
    AboutMePageComponent,
    DevToolsComponent,
    InterestComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule
  ]
})
export class AboutMeModuleModule { }
