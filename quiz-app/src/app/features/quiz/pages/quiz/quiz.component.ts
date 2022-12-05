import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Quiz } from 'src/app/data/models/quiz';
import { UserAnswer } from 'src/app/data/models/user-answer';
import { QuizService } from 'src/app/data/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {
  quiz! : Quiz;
  quizSub!: Subscription;
  quizForm: FormGroup = new FormGroup({})
  quizId = 0;

  constructor(private quizService: QuizService, private route:ActivatedRoute , private router: Router){}

  ngOnDestroy(): void {
    this.quizSub.unsubscribe()
  }

  ngOnInit(): void {
    this.quizSub = this.route.paramMap.pipe(
      switchMap(params => {
        this.quizId = Number(params.get('id'));
        return this.quizService.getQuiz(this.quizId)
      })
    ).subscribe(
      quiz => {
        this.quiz = quiz;

        quiz.questions.forEach(question => {
          this.quizForm.addControl(question.id.toString(), new FormControl('', Validators.required))
        })
      }
    )
  }


  setAnswerValue(answ: UserAnswer) {
    this.quizForm.controls[answ.questionId].setValue(answ.value)
  }

  score(){
    this.router.navigateByUrl(`/quiz/${this.quizId}/score`, {state: this.quizForm.value})
  }
}
