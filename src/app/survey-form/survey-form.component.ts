import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentSurvey } from '../models/student-survey.model';
import { SurveyService } from '../services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  options: FormGroup;
  fNameFormControl: FormControl = new FormControl('', [Validators.required]);
  lNameFormControl: FormControl = new FormControl('', [Validators.required]);
  addressFormControl: FormControl = new FormControl('', [Validators.required]);
  cityFormControl: FormControl = new FormControl('', [Validators.required]);
  stateFormControl: FormControl = new FormControl('', [Validators.required]);
  zipFormControl: FormControl = new FormControl('', [Validators.required]);
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  dateFormControl: FormControl = new FormControl('', [Validators.required]);
  phoneFormControl: FormControl = new FormControl('', [Validators.required]);

  likedMost: string[] = ["Students", "Location", "Campus", "Atmosphere", "Dorm Rooms", "Sports"];
  checkedLikedMost: string[] = [];

  selectedInterest: string = "";
  interests: string[] = ["Friends", "Television", "Internet", "Other"];

  selectedRecommendation: string = "";
  recommendations: string[] = ["Very Likely", "Likely", "Unlikely"];

  constructor(fb: FormBuilder, private surveyService: SurveyService, private router: Router) {
    this.options = fb.group({
      fNameFormControl: this.fNameFormControl,
      lNameFormControl: this.lNameFormControl,
      addressFormControl: this.addressFormControl,
      cityFormControl: this.cityFormControl,
      stateFormControl: this.stateFormControl,
      zipFormControl: this.zipFormControl,
      emailFormControl: this.emailFormControl,
      dateFormControl: this.dateFormControl,
      phoneFormControl: this.phoneFormControl
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const surveyBody: StudentSurvey = { date: this.options.get('dateFormControl').value, telephoneNumber: this.options.get('phoneFormControl').value, email: this.options.get('emailFormControl').value, state: this.options.get('stateFormControl').value, city: this.options.get('cityFormControl').value, zipcode: this.options.get('zipFormControl').value, address: this.options.get('addressFormControl').value, firstName: this.options.get('fNameFormControl').value, lastName: this.options.get('lNameFormControl').value, recommendation: this.selectedRecommendation, interested: this.selectedInterest, thingsLiked: this.checkedLikedMost };
    this.surveyService.postStudentSurvey(surveyBody);
    this.router.navigate(['/survey-acknowledgement']);
  }

  onCheckboxChecked(event, element) {
    if (event.checked)
      this.checkedLikedMost.push(element);
    else {
      let index = this.checkedLikedMost.indexOf(element);
      if (index > -1)
        this.checkedLikedMost.splice(index, 1);
    }
  }
}
