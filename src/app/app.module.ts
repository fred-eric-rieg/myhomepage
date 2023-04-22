import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImprintComponent } from './imprint/imprint.component';
import { AboutComponent } from './about/about.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { SectionTopComponent } from './section-top/section-top.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    AboutComponent,
    MainpageComponent,
    HeaderComponent,
    SectionTopComponent,
    SectionSkillsComponent,
    SectionProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
