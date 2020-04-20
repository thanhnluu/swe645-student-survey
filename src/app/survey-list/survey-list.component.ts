import { Component, OnInit } from '@angular/core';
import { StudentSurvey } from '../models/student-survey.model';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  studentSurveyList: StudentSurvey[] = [];
  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getAllStudentSurveys().subscribe({
      next: (data) => {
        const studentSurveyListValue = data as StudentSurvey[];
        this.studentSurveyList = studentSurveyListValue;
        console.log(this.studentSurveyList);
      },
      error: error => console.error('An error occurred', error)
  });
  }
}
