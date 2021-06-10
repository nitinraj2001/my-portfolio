import { ContactComponent } from './portfolio/contact/contact.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './portfolio/home/home.component';


const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"projects", component:ProjectComponent},
  {path:"skills", component:SkillsComponent},
  {path:"contact", component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
