import { FooterComponent } from './portfolio/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './portfolio/navbar/navbar.component';
import { HomeComponent } from './portfolio/home/home.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ToolsComponent } from './portfolio/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SkillsComponent,
    ProjectComponent,
    ContactComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
