import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { num: 1 } },
  { path: 'about', component: AboutComponent, data: { num: 2 } },
  { path: 'skills', component: SkillsComponent, data:{num:3}},
  { path: 'portfolio', component: PortfolioComponent, data:{num:4}},
  { path: 'contact', component: ContactComponent, data:{num:5} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
