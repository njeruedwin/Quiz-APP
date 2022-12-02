import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { TitleComponent } from './components/title/title.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { ScoreComponent } from './pages/score/score.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizRoutingModule } from './quiz-routing.module';



@NgModule({
  declarations: [
  
    QuestionComponent,
       TitleComponent,
       QuizComponent,
       QuizzesComponent,
       ScoreComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
