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
import { AngularSvgComponent } from './components/angular-svg/angular-svg.component';
import { ReactjsSvgComponent } from './components/reactjs-svg/reactjs-svg.component';
import { BootstrapSvgComponent } from './components/bootstrap-svg/bootstrap-svg.component';
import { CssSvgComponent } from './components/css-svg/css-svg.component';
import { GitSvgComponent } from './components/git-svg/git-svg.component';
import { HtmlSvgComponent } from './components/html-svg/html-svg.component';
import { JsSvgComponent } from './components/js-svg/js-svg.component';
import { NodejsSvgComponent } from './components/nodejs-svg/nodejs-svg.component';
import { ReduxSvgComponent } from './components/redux-svg/redux-svg.component';
import { TailwindcssSvgComponent } from './components/tailwindcss-svg/tailwindcss-svg.component';
import { ArrowSvgComponent } from './components/arrow-svg/arrow-svg.component';



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
    LinkedinComponent,
    AngularSvgComponent,
    ReactjsSvgComponent,
    BootstrapSvgComponent,
    CssSvgComponent,
    GitSvgComponent,
    HtmlSvgComponent,
    JsSvgComponent,
    NodejsSvgComponent,
    ReduxSvgComponent,
    TailwindcssSvgComponent,
    ArrowSvgComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LogoComponent,
    MenuComponent,
    SwithModeComponent,
    ProfileComponent,
    HtmlSvgComponent,
    CssSvgComponent,
    JsSvgComponent,
    ReactjsSvgComponent,
    AngularSvgComponent,
    ReduxSvgComponent,
    TailwindcssSvgComponent,
    NodejsSvgComponent,
    BootstrapSvgComponent,
    GitSvgComponent,
    GithubComponent,
    ArrowSvgComponent
  ]
})
export class SharedModule { }
