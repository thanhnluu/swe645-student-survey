import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyAcknowledgementComponent } from './survey-acknowledgement/survey-acknowledgement.component';

const routes: Routes = [
  { path: '',   component: HomePageComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'survey-list', component: SurveyListComponent },
  { path: 'survey-acknowledgement', component: SurveyAcknowledgementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }