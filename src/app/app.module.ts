import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { SectionTopComponent } from './section-top/section-top.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';
import { SectionProjectsTwoComponent } from './section-projects-two/section-projects-two.component';
import { SectionProjectsThreeComponent } from './section-projects-three/section-projects-three.component';
import { SectionProjectsOneComponent } from './section-projects-one/section-projects-one.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SectionProjectsFourComponent } from './section-projects-four/section-projects-four.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionProjectsFiveComponent } from './section-projects-five/section-projects-five.component';
import { AnimationsComponent } from './animations/animations.component';
import { SectionProjectsSixComponent } from './section-projects-six/section-projects-six.component';
import { SectionProjectsBackendComponent } from './section-projects-backend/section-projects-backend.component';
import { SectionProjectsCrmComponent } from './section-projects-crm/section-projects-crm.component';

@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    MainpageComponent,
    HeaderComponent,
    SectionTopComponent,
    SectionSkillsComponent,
    SectionProjectsComponent,
    SectionProjectsTwoComponent,
    SectionProjectsThreeComponent,
    SectionProjectsOneComponent,
    ContactComponent,
    FooterComponent,
    SectionProjectsFourComponent,
    SectionProjectsFiveComponent,
    AnimationsComponent,
    SectionProjectsSixComponent,
    SectionProjectsBackendComponent,
    SectionProjectsCrmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
