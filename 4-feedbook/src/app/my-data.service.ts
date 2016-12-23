import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MyDataService {

  constructor(private http: Http) { }

  pushFeedback(choice:string, feedback:string):Observable<any> {
    let payload = {
      choice: choice,
      feedback: feedback
    };
    return this.http.post('http://192.168.1.7:3000/feedback/push', payload);
  }

  getFeedback():Observable<any> {
    return this.http.get('http://192.168.1.7:3000/feedback/get');
  }

}
