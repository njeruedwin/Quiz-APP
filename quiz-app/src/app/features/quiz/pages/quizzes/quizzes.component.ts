import { Component } from '@angular/core';
import { QuizService } from 'src/app/data/services/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent {
  quizzes$ = this.quizService.getQuizzes();

  constructor(private quizService: QuizService){}

  ngOnInit(): void{
    
  }
}
