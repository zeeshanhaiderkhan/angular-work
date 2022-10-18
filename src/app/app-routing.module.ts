import { NgModule, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserFormComponent } from './user-form/user-form.component';

@Injectable({
  providedIn:'root'
})
export class TemplatePageTitleStrategy extends TitleStrategy{
  constructor(private readonly title:Title){
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title=this.buildTitle(routerState);
    if(title !== undefined){
      this.title.setTitle(`Zeeshan App | ${title}`);
    }
  }

}

const routes: Routes = [
  {
    path:"component1/:name",
    component:Component1Component,
  
  },
  {
    path:"form",
    component:UserFormComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    {
      provide:TitleStrategy, useClass:TemplatePageTitleStrategy
    }
  ]
})
export class AppRoutingModule { }
