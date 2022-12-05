import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif, Observable, switchMap } from 'rxjs';
import { Score } from 'src/app/data/models/score';
import { UserAnswer } from 'src/app/data/models/user-answer';
import { QuizService } from 'src/app/data/services/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit{

  score$ : Observable<string | Score> | undefined;
  quizId = 0;

  constructor(private route: ActivatedRoute, private quizService: QuizService){}

  ngOnInit(): void {
    this.score$ = this.route.paramMap
    .pipe(
      switchMap(params =>{
        const state = window.history.state;
        this.quizId = Number(params.get('id'))

        let reqBody: UserAnswer [] = []

        for( const [qstnId, answ] of Object.entries(state)) {
          if(typeof answ === 'string') {
            reqBody.push({ questionId: Number(qstnId),value: answ })
          }
        }

        return iif(() => this.quizId > 0 && reqBody.length > 0, this.quizService.score(this.quizId, reqBody), '')
      } )
    )
  }
}
