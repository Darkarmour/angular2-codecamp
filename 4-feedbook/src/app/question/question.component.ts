import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  choice:string;
  feedback:string;
  isFormSubmitted:boolean;

  constructor(private myData: MyDataService) { }

  ngOnInit() {
  }

  makeChoice(input) {
    this.choice = input;
  }

  submitFeedback() {
    console.log('Submitting: ' + this.choice + '|' + this.feedback);
    this.isFormSubmitted = true;
    this.myData.pushFeedback(this.choice, this.feedback).subscribe((response)=>{
      console.log('Data pushed');
    });
  }

}
