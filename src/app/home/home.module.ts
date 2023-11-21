import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { FloorSvgComponent } from './components/floor-svg/floor-svg.component';
import { TreeSvgComponent } from './components/tree-svg/tree-svg.component';
import { MountainSvgComponent } from './components/mountain-svg/mountain-svg.component';
import { BonfireSvgComponent } from './components/bonfire-svg/bonfire-svg.component';
import { FireSvgComponent } from './components/fire-svg/fire-svg.component';
import { StarSvgComponent } from './components/star-svg/star-svg.component';
import { CloudSvgComponent } from './components/cloud-svg/cloud-svg.component';
import { MoonSvgComponent } from './components/moon-svg/moon-svg.component';


@NgModule({
  declarations: [
    HomePageComponent,
    FloorSvgComponent,
    TreeSvgComponent,
    MountainSvgComponent,
    BonfireSvgComponent,
    FireSvgComponent,
    StarSvgComponent,
    CloudSvgComponent,
    MoonSvgComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
