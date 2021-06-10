import { ContactComponent } from './portfolio/contact/contact.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { HomeComponent } from './../../../customer-management/src/app/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
