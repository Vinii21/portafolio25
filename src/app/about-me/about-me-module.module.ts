import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { AboutMeRoutingModule } from './about-routing.module';
import { DevToolsComponent } from './components/dev-tools/dev-tools.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutMePageComponent,
    DevToolsComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule
  ]
})
export class AboutMeModuleModule { }
