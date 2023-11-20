import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogComponent } from './components/blog/blog.component';
import { UserComponent } from './components/user/user.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { GraduationComponent } from './components/graduation/graduation.component';
import { SunComponent } from './components/sun/sun.component';
import { MoonComponent } from './components/moon/moon.component';
import { GithubComponent } from './components/github/github.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { SwithModeComponent } from './components/swith-mode/swith-mode.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LogoComponent,
    MenuComponent,
    BlogComponent,
    UserComponent,
    PorfolioComponent,
    ContactComponent,
    GraduationComponent,
    SunComponent,
    MoonComponent,
    GithubComponent,
    InstagramComponent,
    SwithModeComponent,
    ProfileComponent,
    LinkedinComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LogoComponent,
    MenuComponent,
    SwithModeComponent,
    ProfileComponent
  ]
})
export class SharedModule { }
