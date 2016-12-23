import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  allCount:number = 0;
  noneCount:number = 0;
  okokCount:number = 0;
  comments:Array<string> = [];

  constructor(private myData: MyDataService) { }

  ngOnInit() {
    this.getFeedback();
  }

  getFeedback() {
    this.myData.getFeedback().subscribe((response)=>{
      let feedbacks = response.json();
      for(let feedback of feedbacks) {
        let parsedFeedback = JSON.parse(feedback.feedback);
        if(parsedFeedback.choice === 'all')
          this.allCount++;
        else if (parsedFeedback.choice === 'half')
          this.okokCount++;
        else if (parsedFeedback.choice === 'none')
          this.noneCount++;
        if(parsedFeedback.feedback)
          this.comments.push(parsedFeedback.feedback);
      }
    });
  }

}
