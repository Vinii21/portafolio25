import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () => import('./about-me/about-me-module.module').then(m=>m.AboutMeModuleModule)
  },
  {
    path: "cv",
    loadChildren: () => import('./cvitae/cvitae.module').then(m=>m.CvitaeModule)
  },
  {
    path: "porfolio",
    loadChildren: () => import('./porfolio/porfolio.module').then(m=>m.PorfolioModule)
  },
  {
    path: "blog",
    loadChildren: () => import('./blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path: "contact",
    loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
