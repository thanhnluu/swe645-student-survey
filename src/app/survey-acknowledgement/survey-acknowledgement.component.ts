import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-acknowledgement',
  templateUrl: './survey-acknowledgement.component.html',
  styleUrls: ['./survey-acknowledgement.component.css']
})
export class SurveyAcknowledgementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['/']);
  }

}
