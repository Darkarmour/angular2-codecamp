import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.getFeedback();
  }

  getFeedback() {

  }

}
