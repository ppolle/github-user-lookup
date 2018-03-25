import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing/routing.module';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { GithubComponent } from './github/github.component';

// const routes:Routes=[
//   {path:""component:AppComponent},
//   {path:"about",component:AboutComponent},
//   {path:"contact",component:ContactComponent},
//   {path:'**',component:NotFoundComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
