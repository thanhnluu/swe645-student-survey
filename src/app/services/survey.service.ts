import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { StudentSurvey } from '../models/student-survey.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  postStudentSurvey(body: StudentSurvey){
    this.http.post<StudentSurvey>(`${environment.studentSurveyServiceUrl}/create`, body).subscribe({
      next: data => console.log(data),
      error: error => console.error('An error occurred', error)
  });
  }

  getAllStudentSurveys(): Observable<StudentSurvey[]>{
    return this.http.get<StudentSurvey[]>(`${environment.studentSurveyServiceUrl}/studentsurveys`);
  }
}
